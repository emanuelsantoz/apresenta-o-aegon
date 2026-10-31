import type { LucideIcon } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export interface RoleCardDef {
  mark: string;
  kicker: string;
  name: string;
  description: string;
  outputsLabel: string;
  outputs: string;
}

export interface OpsRibbonItem {
  icon: LucideIcon;
  label: string;
}

export interface OperacaoData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  roles: RoleCardDef[];
  ribbon: OpsRibbonItem[];
  closingNote: string;
}

/** Seção 07 · Três frentes, uma direção (#operacao): papéis dos 3 sócios, faixa de governança e decisão esperada. */
export function OperacaoLayout({ d }: { d: OperacaoData }) {
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

      {/* 3 cards de papéis (.operations) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, margin: '20px 0', flex: 1 }}>
        {d.roles.map((r, i) => (
          <Reveal key={r.name} delay={0.14 + i * 0.07} from="up">
            <article
              style={{
                height: '100%', padding: '32px 34px', border: '1px solid #e0e3e8', background: '#ffffff',
                borderRadius: 24, boxShadow: '0 10px 30px rgba(5,30,80,0.06)', display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ width: 58, height: 58, borderRadius: 18, background: 'var(--blue)', color: '#ffffff', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 24, marginBottom: 22 }}>
                {r.mark}
              </div>
              <div style={{ fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800, color: '#1046a0', marginBottom: 8 }}>
                {r.kicker}
              </div>
              <h2 style={{ fontSize: 34, fontWeight: 800, color: 'var(--ink)', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
                {r.name}
              </h2>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: '#465873', margin: 0 }}>
                {r.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid #dce4f0', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <b style={{ fontSize: 16, color: '#083b91', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {r.outputsLabel}
                </b>
                <span style={{ fontSize: 18, color: '#394b65', fontWeight: 600 }}>
                  {r.outputs}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Faixa de governança (.ops-ribbon) + Nota de decisão */}
      <Reveal delay={0.28}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {d.ribbon.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999,
                    padding: '10px 18px', background: '#e8effa', color: 'var(--blue)', fontSize: 17, fontWeight: 800,
                  }}
                >
                  <Icon size={19} />
                  {item.label}
                </span>
              );
            })}
          </div>
          <div style={{ background: '#eef1f8', borderLeft: '5px solid var(--electric)', padding: '16px 24px', borderRadius: '6px 16px 16px 6px', color: '#2b426d', fontSize: 20 }}>
            <strong>Decisão esperada:</strong> {d.closingNote}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
