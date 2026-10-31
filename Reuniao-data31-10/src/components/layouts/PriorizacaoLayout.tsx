import type { LucideIcon } from 'lucide-react';
import { Clock, Trophy } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import {
  CRITERIA_LIST,
  PROJECT_NAMES,
  getProjectTotal,
  getScore,
  setScore,
  useAegonStorageVersion,
} from '../../lib/aegonStore';

export interface CriterionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PriorizacaoData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  criteria: CriterionItem[];
  matrixHelper: string;
  closingNote: string;
}

/** Seção 04 · Critério antes de pressa (#priorizacao): 6 critérios + Matriz de Priorização interativa. */
export function PriorizacaoLayout({ d }: { d: PriorizacaoData }) {
  useAegonStorageVersion();

  const totals = PROJECT_NAMES.map((_, j) => getProjectTotal(j));
  const maxTotal = Math.max(...totals);

  return (
    <div style={{ position: 'absolute', inset: '120px 96px 98px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#dceaff', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '8px 0 10px', fontSize: 56, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em', color: '#ffffff' }}>
              {d.title[0]} <span style={{ color: '#cbdfff' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 21, lineHeight: 1.42, color: '#e4edff', maxWidth: 1020 }}>
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

      {/* Corpo: 6 critérios à esquerda + Matriz de Priorização interativa à direita */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.88fr 1.12fr', gap: 26, alignItems: 'stretch', flex: 1, margin: '18px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)', gap: 14 }}>
          {d.criteria.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={0.12 + i * 0.04} from="left">
                <div
                  style={{
                    height: '100%', border: '1px solid rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.08)',
                    borderRadius: 20, padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}
                >
                  <Icon size={28} color="var(--gold)" />
                  <div>
                    <strong style={{ fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 21, display: 'block', color: '#fff' }}>
                      {c.title}
                    </strong>
                    <span style={{ color: '#c7d7f1', fontSize: 16, lineHeight: 1.35, display: 'block', marginTop: 4 }}>
                      {c.desc}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Matriz de priorização interativa (.score-table) */}
        <Reveal delay={0.18} from="right">
          <div
            data-interactive
            style={{
              height: '100%', border: '1px solid rgba(255,255,255,0.34)', borderRadius: 22, padding: '22px 26px',
              background: 'rgba(4,24,66,0.42)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 21, fontWeight: 800, fontFamily: 'var(--font-brand)', color: '#fff' }}>
                  Matriz de Priorização Interativa (notas 1 a 5)
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#ffedb5', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Trophy size={16} /> Salvo automaticamente no navegador
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: 15, color: '#d5e2fa', lineHeight: 1.4 }}>
                {d.matrixHelper}
              </p>
            </div>

            <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 16 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid rgba(255,255,255,0.28)', color: '#dceaff', fontWeight: 800 }}>
                    Critério
                  </th>
                  {PROJECT_NAMES.map((name) => (
                    <th key={name} style={{ textAlign: 'center', padding: '10px 6px', borderBottom: '1px solid rgba(255,255,255,0.28)', color: '#fff', fontWeight: 800, fontSize: 15 }}>
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERIA_LIST.map((crit, r) => (
                  <tr key={crit}>
                    <td style={{ padding: '9px 8px', borderBottom: '1px solid rgba(255,255,255,0.16)', fontWeight: 600, color: '#f0f5ff' }}>
                      {crit}
                    </td>
                    {PROJECT_NAMES.map((proj, j) => (
                      <td key={proj} style={{ padding: '7px 6px', borderBottom: '1px solid rgba(255,255,255,0.16)', textAlign: 'center' }}>
                        <select
                          aria-label={`${crit}, ${proj}`}
                          value={getScore(r, j)}
                          onChange={(e) => setScore(r, j, e.target.value)}
                          style={{
                            border: '1px solid #b9ccec',
                            borderRadius: 9,
                            background: '#ffffff',
                            color: 'var(--navy)',
                            minWidth: 72,
                            padding: '6px 10px',
                            fontWeight: 800,
                            fontSize: 16,
                            cursor: 'pointer',
                          }}
                        >
                          <option value="">—</option>
                          {[1, 2, 3, 4, 5].map((k) => (
                            <option key={k} value={String(k)}>
                              {k}
                            </option>
                          ))}
                        </select>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ background: 'rgba(255,255,255,0.12)', fontWeight: 800, fontSize: 19 }}>
                  <td style={{ padding: '12px 10px', borderRadius: '10px 0 0 10px', color: '#fff' }}>Resultado total</td>
                  {totals.map((tot, j) => {
                    const isLeader = maxTotal > 0 && tot === maxTotal;
                    return (
                      <td
                        key={PROJECT_NAMES[j]}
                        style={{
                          padding: '12px 8px',
                          textAlign: 'center',
                          color: isLeader ? 'var(--gold)' : '#fff',
                          borderRadius: j === totals.length - 1 ? '0 10px 10px 0' : 0,
                        }}
                      >
                        {tot}/30
                      </td>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div style={{ background: 'rgba(255,255,255,0.1)', borderLeft: '5px solid #d2e4ff', padding: '16px 24px', borderRadius: '6px 16px 16px 6px', color: '#ffffff', fontSize: 20 }}>
          <strong>Decisão esperada:</strong> {d.closingNote}
        </div>
      </Reveal>
    </div>
  );
}
