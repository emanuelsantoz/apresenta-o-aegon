import { ArrowRight, Check, Clock, Printer } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import {
  PLAN_TASKS,
  copyActionPlanToClipboard,
  isChecked,
  safeGet,
  safeSet,
  setChecked,
  useAegonStorageVersion,
} from '../../lib/aegonStore';

export interface PlanoAcaoData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  planNote: string;
}

/** Seção 08 · Compromissos que movem (#plano): checklist interativo de 8 ações + responsável + prazo + exportar/imprimir. */
export function PlanoAcaoLayout({ d }: { d: PlanoAcaoData }) {
  useAegonStorageVersion();
  const [feedback, setFeedback] = useState('');

  const handleCopy = async () => {
    const ok = await copyActionPlanToClipboard();
    setFeedback(ok ? 'Plano copiado!' : 'Não foi possível copiar automaticamente.');
    window.setTimeout(() => setFeedback(''), 3000);
  };

  return (
    <div style={{ position: 'absolute', inset: '115px 96px 96px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1080 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#dceaff', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '6px 0 8px', fontSize: 52, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em', color: '#ffffff' }}>
              {d.title[0]} <span style={{ color: '#93c5fd' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.4, color: '#e4edff', maxWidth: 980 }}>
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

      {/* Grade 2x4 das 8 ações (.plan-list) */}
      <div
        data-interactive
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(4, 1fr)',
          gap: 14, margin: '18px 0', flex: 1,
        }}
      >
        {PLAN_TASKS.map((task, idx) => {
          const checked = isChecked(task.taskKey);
          return (
            <Reveal key={task.taskKey} delay={0.1 + idx * 0.03} from="up">
              <div
                style={{
                  height: '100%', padding: '16px 20px',
                  background: checked ? 'rgba(18,80,191,0.32)' : 'rgba(255,255,255,0.08)',
                  border: checked ? '1.5px solid #93c5fd' : '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <input
                    type="checkbox"
                    id={task.taskKey}
                    checked={checked}
                    onChange={(e) => setChecked(task.taskKey, e.target.checked)}
                    style={{ width: 20, height: 20, accentColor: 'var(--gold)', cursor: 'pointer', flex: 'none' }}
                  />
                  <label
                    htmlFor={task.taskKey}
                    style={{
                      fontWeight: 700, fontSize: 18, color: '#ffffff', cursor: 'pointer', lineHeight: 1.3,
                      textDecoration: checked ? 'line-through' : 'none', opacity: checked ? 0.85 : 1,
                    }}
                  >
                    <span style={{ color: 'var(--gold)', marginRight: 6 }}>{idx + 1}.</span>
                    {task.label}
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <input
                    type="text"
                    value={safeGet(task.ownerKey) ?? ''}
                    onChange={(e) => safeSet(task.ownerKey, e.target.value)}
                    placeholder="Responsável (ex.: Adilson)"
                    aria-label={`Responsável da ação ${idx + 1}`}
                    style={{
                      background: '#ffffff', color: '#072b70', border: '1px solid #cfdaef',
                      padding: '8px 12px', width: '100%', borderRadius: 10, fontSize: 16, fontWeight: 600,
                    }}
                  />
                  <input
                    type="text"
                    value={safeGet(task.dateKey) ?? ''}
                    onChange={(e) => safeSet(task.dateKey, e.target.value)}
                    placeholder="Prazo (ex.: 15/11/2026)"
                    aria-label={`Prazo da ação ${idx + 1}`}
                    style={{
                      background: '#ffffff', color: '#072b70', border: '1px solid #cfdaef',
                      padding: '8px 12px', width: '100%', borderRadius: 10, fontSize: 16, fontWeight: 600,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Ações e rodapé (.plan-actions & .plan-note) */}
      <Reveal delay={0.3}>
        <div
          data-interactive
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)',
            padding: '14px 22px', borderRadius: 16,
          }}
        >
          <span style={{ fontSize: 16, color: '#d9e7ff' }}>{d.planNote}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {feedback && (
              <span style={{ fontSize: 16, fontWeight: 800, color: '#f1db9a', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Check size={18} /> {feedback}
              </span>
            )}
            <button
              type="button"
              onClick={() => void handleCopy()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px', borderRadius: 999,
                background: '#ffffff', color: 'var(--navy)', border: 'none', fontWeight: 800, fontSize: 17, cursor: 'pointer',
              }}
            >
              Copiar plano de ação <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => window.open('?print=1', '_blank')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 999,
                background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.7)',
                fontWeight: 800, fontSize: 17, cursor: 'pointer',
              }}
            >
              <Printer size={18} /> Imprimir / salvar PDF
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
