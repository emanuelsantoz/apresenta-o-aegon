import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Clock, Target } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export interface DirectionCardDef {
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  light?: boolean;
  bullets: string[];
}

export interface DirecionamentoData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  cards: [DirectionCardDef, DirectionCardDef];
  decisionText: string;
}

/** Seção 02 · Posicionamento e modelo de negócio (#direcionamento): 2 frentes complementares em fundo azul AEGON. */
export function DirecionamentoLayout({ d }: { d: DirecionamentoData }) {
  return (
    <div style={{ position: 'absolute', inset: '125px 96px 104px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#dceaff', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '10px 0 12px', fontSize: 60, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em', color: '#ffffff' }}>
              {d.title[0]} <span style={{ color: '#cbdfff' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 22, lineHeight: 1.45, color: '#e4edff', maxWidth: 1020 }}>
              {d.subtitle}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', padding: '10px 18px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,0.42)', background: 'rgba(255,255,255,0.08)', fontSize: 17, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap' }}>
            <Clock size={18} /> {d.timePill}
          </span>
        </Reveal>
      </div>

      {/* Duas frentes (.direction-grid) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, margin: '24px 0', flex: 1 }}>
        {d.cards.map((c, idx) => {
          const Icon = c.icon;
          const isLight = Boolean(c.light);
          return (
            <Reveal key={c.title} delay={0.16 + idx * 0.08} from="up">
              <article
                style={{
                  height: '100%',
                  borderRadius: 26,
                  background: isLight ? '#f5f2e9' : 'rgba(255,255,255,0.1)',
                  color: isLight ? 'var(--ink)' : '#ffffff',
                  border: isLight ? '1px solid #e8e3d9' : '1px solid rgba(255,255,255,0.28)',
                  padding: '36px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isLight ? '0 18px 45px rgba(0,30,80,0.16)' : 'none',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                    <div
                      style={{
                        width: 64, height: 64, display: 'grid', placeItems: 'center', borderRadius: 18,
                        background: isLight ? '#e6ecfb' : 'rgba(255,255,255,0.14)',
                        color: isLight ? 'var(--blue)' : '#ffffff',
                      }}
                    >
                      <Icon size={32} />
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.13em', color: isLight ? 'var(--electric)' : '#e0edff' }}>
                      {c.kicker}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 42, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 16px' }}>
                    {c.title}
                  </h2>
                  <p style={{ fontSize: 22, lineHeight: 1.48, color: isLight ? '#465a76' : '#f1f6ff', margin: 0 }}>
                    {c.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                  {c.bullets.map((b) => (
                    <span
                      key={b}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 999,
                        fontSize: 17,
                        fontWeight: 700,
                        background: isLight ? '#e7ecf7' : 'rgba(255,255,255,0.14)',
                        color: isLight ? 'var(--navy)' : '#fff',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Rodapé de decisão + atalho para a oferta comercial em validação */}
      <Reveal delay={0.3}>
        <div
          data-interactive
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.24)',
            padding: '18px 26px', borderRadius: 18, color: '#f0f5ff', fontSize: 20,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <Target size={24} color="var(--gold)" />
            <span>
              <strong>Decisão desta etapa:</strong> {d.decisionText}
            </span>
          </span>
          <a
            href="#/5"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 999,
              background: '#ffffff', color: 'var(--navy)', fontWeight: 800, fontSize: 17, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Ver Consultoria PME <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
