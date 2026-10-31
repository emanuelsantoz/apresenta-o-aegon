import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { IconBadge } from '../ui/IconBadge';

export interface AgendaItem {
  n: string;
  icon: LucideIcon;
  title: string;
  time: string;
  text: string;
  slideHref: string;
}

export interface AgendaData {
  eyebrow: string;
  title: string;
  side: string;
  totalTime: string;
  items: AgendaItem[];
}

/** Pauta da Reunião Estratégica: painel azul-marinho à esquerda + grade 2x4 clicável à direita. */
export function AgendaLayout({ d }: { d: AgendaData }) {
  return (
    <>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 610, background: 'linear-gradient(155deg, #042565, #063a96)', overflow: 'hidden', color: '#fff' }}>
        <div style={{ position: 'absolute', left: 96, top: 185, right: 64 }}>
          <Reveal>
            <div style={{ fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 800, color: '#cbdfff', marginBottom: 22 }}>
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 style={{ margin: 0, fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.045em', fontWeight: 800 }}>
              {d.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p style={{ margin: '28px 0 0', fontSize: 24, lineHeight: 1.45, color: '#dceaff' }}>
              {d.side}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ marginTop: 34, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', fontSize: 19, fontWeight: 700 }}>
              <Clock size={20} color="var(--gold)" /> {d.totalTime}
            </div>
          </Reveal>
        </div>
        <div
          aria-hidden
          style={{
            position: 'absolute', left: 240, bottom: -40, fontSize: 310, fontWeight: 800, lineHeight: 0.85,
            color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.14em', fontFamily: 'var(--font-brand)',
          }}
        >
          on
        </div>
      </div>

      <div
        data-interactive
        style={{
          position: 'absolute', left: 660, right: 86, top: 140, bottom: 110,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(4, 1fr)', gap: 18,
        }}
      >
        {d.items.map((it, i) => (
          <Reveal key={it.n} delay={0.08 + i * 0.04} from="up">
            <a
              href={it.slideHref}
              style={{
                height: '100%', display: 'flex', gap: 20, alignItems: 'center', padding: '20px 24px',
                borderRadius: 20, background: '#fff', border: '1px solid var(--stroke)',
                boxShadow: '0 8px 24px rgba(5,30,80,0.06)', textDecoration: 'none', color: 'inherit',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 5, background: i % 2 === 0 ? 'var(--electric)' : 'var(--navy)' }} />
              <div className="num" style={{ fontSize: 48, fontWeight: 800, fontFamily: 'var(--font-brand)', color: 'var(--electric)', letterSpacing: '-0.06em', minWidth: 64 }}>
                {it.n}
              </div>
              <IconBadge icon={it.icon} tone={i % 2 === 0 ? 'green' : 'lime'} size={54} radius={16} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', fontFamily: 'var(--font-brand)', letterSpacing: '-0.02em' }}>
                    {it.title}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: '#33466c', background: '#edf2ff', padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {it.time} <ArrowUpRight size={14} />
                  </span>
                </div>
                <p style={{ margin: '6px 0 0', fontSize: 17, color: 'var(--muted)', lineHeight: 1.35 }}>
                  {it.text}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </>
  );
}
