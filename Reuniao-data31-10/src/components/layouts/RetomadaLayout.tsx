import { Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export interface TeamMember {
  initial: string;
  name: string;
  desc: string;
}

export interface RetomadaData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  quoteStart: string;
  quoteHighlight: string;
  quoteEnd: string;
  introCopy: string;
  prompt: string;
  team: TeamMember[];
  closingNote: string;
}

/** Seção 01 · Pessoas e direção (#retomada): citação, pergunta-chave, cards dos 3 sócios e decisão esperada. */
export function RetomadaLayout({ d }: { d: RetomadaData }) {
  return (
    <div style={{ position: 'absolute', inset: '125px 96px 104px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Cabeçalho da seção */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--electric)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '10px 0 12px', fontSize: 58, lineHeight: 1.06, fontWeight: 800, letterSpacing: '-0.045em', color: 'var(--ink)' }}>
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

      {/* Corpo em 2 colunas (.intro-grid) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: 36, alignItems: 'stretch', margin: '22px 0' }}>
        <Reveal delay={0.15} from="left">
          <div style={{ height: '100%', background: '#ffffff', border: '1px solid var(--stroke)', borderRadius: 24, padding: '38px 42px', boxShadow: '0 12px 36px rgba(5,30,80,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: 'var(--font-brand)', fontSize: 46, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.045em', color: 'var(--ink)' }}>
              {d.quoteStart} <span style={{ color: 'var(--electric)' }}>{d.quoteHighlight}</span> {d.quoteEnd}
            </div>
            <p style={{ margin: '20px 0', fontSize: 23, lineHeight: 1.5, color: '#4f607b' }}>
              {d.introCopy}
            </p>
            <div style={{ padding: '18px 22px', borderRadius: 16, background: '#edf2ff', border: '1px solid #c8d7f5', fontSize: 21, fontWeight: 800, color: 'var(--blue)' }}>
              {d.prompt}
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between' }}>
          {d.team.map((m, i) => (
            <Reveal key={m.name} delay={0.18 + i * 0.07} from="right">
              <div style={{ padding: '22px 26px', border: '1px solid #e1e5ec', background: '#ffffff', borderRadius: 20, boxShadow: '0 8px 24px rgba(5,30,80,0.05)', display: 'flex', alignItems: 'center', gap: 22 }}>
                <span style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-brand)', background: '#eaf0ff', color: 'var(--blue)', width: 58, height: 58, borderRadius: 16, display: 'grid', placeItems: 'center', flex: 'none' }}>
                  {m.initial}
                </span>
                <div>
                  <b style={{ display: 'block', fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 25, color: 'var(--navy)' }}>
                    {m.name}
                  </b>
                  <span style={{ color: '#465a75', fontSize: 19, lineHeight: 1.4, display: 'block', marginTop: 4 }}>
                    {m.desc}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Nota de decisão (.closing-note) */}
      <Reveal delay={0.3}>
        <div style={{ background: '#eef1f8', borderLeft: '5px solid var(--electric)', padding: '18px 26px', borderRadius: '6px 18px 18px 6px', color: '#2b426d', fontSize: 21 }}>
          <strong>Decisão esperada:</strong> {d.closingNote}
        </div>
      </Reveal>
    </div>
  );
}
