import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export interface BrandCardDef {
  icon: LucideIcon;
  visualBg: string;
  title: string;
  description: string;
  tag: string;
}

export interface IdentidadeData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  cards: BrandCardDef[];
  noteStrong: string;
  noteText: string;
  siteUrl: string;
  siteLabel: string;
}

/** Seção 05 · Nossa marca, nosso compromisso (#identidade): 4 pilares de presença + link para o site atual em produção. */
export function IdentidadeLayout({ d }: { d: IdentidadeData }) {
  return (
    <div style={{ position: 'absolute', inset: '125px 96px 104px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--electric)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '10px 0 12px', fontSize: 56, lineHeight: 1.06, fontWeight: 800, letterSpacing: '-0.045em', color: 'var(--ink)' }}>
              {d.title[0]} <span style={{ color: 'var(--electric)' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 22, lineHeight: 1.45, color: 'var(--muted)', maxWidth: 1060 }}>
              {d.subtitle}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', padding: '10px 18px', borderRadius: 999, border: '1.5px solid #d7dde7', background: '#fff', fontSize: 17, fontWeight: 800, color: '#33466c', whiteSpace: 'nowrap' }}>
            <Clock size={18} /> {d.timePill}
          </span>
        </Reveal>
      </div>

      {/* 4 cards de identidade (.brand-grid) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, margin: '24px 0', flex: 1 }}>
        {d.cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={0.14 + i * 0.06} from="up">
              <article
                style={{
                  height: '100%', overflow: 'hidden', borderRadius: 24, background: '#ffffff',
                  border: '1px solid var(--stroke)', boxShadow: '0 10px 30px rgba(5,30,80,0.06)',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    height: 195, background: c.visualBg, display: 'grid', placeItems: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', border: '18px solid rgba(6,58,150,0.07)', right: -55, top: -55 }} />
                  <Icon size={76} strokeWidth={1.35} color="var(--blue)" />
                </div>
                <div style={{ padding: '26px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: 14, color: 'var(--blue)', background: '#edf2ff', borderRadius: 999, padding: '5px 12px', fontWeight: 800, marginBottom: 12 }}>
                      {c.tag}
                    </span>
                    <h2 style={{ fontSize: 29, fontWeight: 800, color: 'var(--ink)', margin: '0 0 10px', letterSpacing: '-0.03em' }}>
                      {c.title}
                    </h2>
                    <p style={{ fontSize: 19, lineHeight: 1.5, color: '#485975', margin: 0 }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Nota sobre o site institucional em produção (.brand-note) */}
      <Reveal delay={0.3}>
        <div
          data-interactive
          style={{
            background: '#edf1f8', border: '1px solid #c8d7f5', color: '#324d7b', padding: '18px 26px',
            borderRadius: 18, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
          }}
        >
          <span>
            <strong>{d.noteStrong}</strong> {d.noteText}
          </span>
          <a
            href={d.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 999,
              background: 'var(--blue)', color: '#ffffff', fontWeight: 800, fontSize: 18, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            {d.siteLabel} <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
