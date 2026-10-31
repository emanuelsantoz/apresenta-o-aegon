import { Clock } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import {
  EVENTS_LIST,
  getSelectedEventsCount,
  isChecked,
  setChecked,
  useAegonStorageVersion,
} from '../../lib/aegonStore';

export interface PartnerItem {
  name: string;
  tag: string;
}

export interface ParceriasData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  leftLabel: string;
  leftTitle: string;
  leftDescription: string;
  partners: PartnerItem[];
  partnerQuestionTitle: string;
  partnerQuestionText: string;
  rightLabel: string;
  rightTitle: string;
  rightDescription: string;
  connectionNote: string;
}

/** Seção 06 · Construir relações, abrir portas (#parcerias): Parcerias em prospecção + Checklist de eventos com contador. */
export function ParceriasLayout({ d }: { d: ParceriasData }) {
  useAegonStorageVersion();

  const count = getSelectedEventsCount();
  const confirmados = EVENTS_LIST.filter((e) => e.group === 'confirmados');
  const monitorar = EVENTS_LIST.filter((e) => e.group === 'monitorar');

  return (
    <div style={{ position: 'absolute', inset: '115px 96px 96px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#dceaff', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '6px 0 8px', fontSize: 52, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em', color: '#ffffff' }}>
              {d.title[0]} <span style={{ color: '#cbdfff' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.4, color: '#e4edff', maxWidth: 1080 }}>
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

      {/* Painéis lado a lado (.connections) */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.86fr 1.14fr', gap: 24, alignItems: 'stretch', flex: 1, marginTop: 16 }}>
        {/* Painel esquerdo: Parcerias em prospecção */}
        <Reveal delay={0.15} from="left">
          <div
            style={{
              height: '100%', border: '1px solid rgba(172,199,242,0.4)', borderRadius: 24, padding: '26px 30px',
              background: 'rgba(0,22,66,0.28)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800, color: '#d5e6ff', marginBottom: 8 }}>
                {d.leftLabel}
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>{d.leftTitle}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: '#eef5ff', margin: '0 0 18px' }}>{d.leftDescription}</p>

              <div style={{ display: 'grid', gap: 11 }}>
                {d.partners.map((p) => (
                  <div
                    key={p.name}
                    style={{
                      background: '#ffffff', color: 'var(--navy)', borderRadius: 14, padding: '15px 18px',
                      display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 19,
                      boxShadow: '0 4px 14px rgba(0,22,70,0.12)',
                    }}
                  >
                    <i style={{ height: 11, width: 11, borderRadius: '50%', background: 'var(--electric)', display: 'inline-block' }} />
                    <span>{p.name}</span>
                    <small style={{ marginLeft: 'auto', color: '#465876', fontWeight: 700, fontSize: 15 }}>{p.tag}</small>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                border: '1px solid rgba(236,246,255,0.35)', borderRadius: 16, background: 'rgba(255,255,255,0.09)',
                padding: '16px 20px', color: '#f5f9ff', fontSize: 17, lineHeight: 1.5, marginTop: 16,
              }}
            >
              <strong style={{ color: '#fff', display: 'block', marginBottom: 4 }}>{d.partnerQuestionTitle}</strong>
              {d.partnerQuestionText}
            </div>
          </div>
        </Reveal>

        {/* Painel direito: Agenda estratégica regional com checkboxes e links */}
        <Reveal delay={0.2} from="right">
          <div
            data-interactive
            style={{
              height: '100%', border: '1px solid rgba(172,199,242,0.4)', borderRadius: 24, padding: '22px 26px',
              background: 'rgba(0,22,66,0.28)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800, color: '#d5e6ff', marginBottom: 4 }}>
                    {d.rightLabel}
                  </div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: '#fff' }}>{d.rightTitle}</h2>
                </div>
                <div
                  style={{
                    display: 'inline-flex', alignItems: 'center', color: '#082c69', fontWeight: 800,
                    background: count >= 3 ? '#f1cc68' : '#f4f7ff', borderRadius: 999, padding: '8px 16px', fontSize: 15, whiteSpace: 'nowrap',
                  }}
                >
                  {count} de 5 selecionadas · {count >= 3 ? 'Meta atingida ✓' : 'Escolham pelo menos 3'}
                </div>
              </div>
              <p style={{ fontSize: 15, color: '#eef5ff', margin: '4px 0 10px' }}>{d.rightDescription}</p>

              <div style={{ color: '#fff', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                CONFIRMADOS PARA NOVEMBRO DE 2026
              </div>
              <div style={{ display: 'grid', gap: 7, marginBottom: 10 }}>
                {confirmados.map((ev) => (
                  <div
                    key={ev.id}
                    style={{
                      display: 'grid', gridTemplateColumns: '22px minmax(0, 1fr) auto', alignItems: 'center', columnGap: 10,
                      border: '1px solid rgba(234,242,255,0.27)', background: 'rgba(7,23,66,0.48)', padding: '9px 13px', borderRadius: 12,
                    }}
                  >
                    <input
                      type="checkbox"
                      id={ev.id}
                      checked={isChecked(ev.id)}
                      onChange={(e) => setChecked(ev.id, e.target.checked)}
                      style={{ width: 18, height: 18, accentColor: '#f1cc68', cursor: 'pointer', margin: 0 }}
                    />
                    <label htmlFor={ev.id} style={{ cursor: 'pointer', fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                      {ev.title} <span style={{ color: '#fff5cf', fontWeight: 800, fontSize: 14 }}>· {ev.meta}</span>
                      <span style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#e2edff', marginTop: 2 }}>{ev.desc}</span>
                    </label>
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: '#f2f6ff', whiteSpace: 'nowrap', fontSize: 14, fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: 3 }}
                    >
                      {ev.linkLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div style={{ color: '#fff', fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
                AGENDA PARA MONITORAR — DATAS A CONFIRMAR
              </div>
              <div style={{ display: 'grid', gap: 7 }}>
                {monitorar.map((ev) => (
                  <div
                    key={ev.id}
                    style={{
                      display: 'grid', gridTemplateColumns: '22px minmax(0, 1fr) auto', alignItems: 'center', columnGap: 10,
                      border: '1px solid rgba(234,242,255,0.27)', background: 'rgba(7,23,66,0.48)', padding: '9px 13px', borderRadius: 12,
                    }}
                  >
                    <input
                      type="checkbox"
                      id={ev.id}
                      checked={isChecked(ev.id)}
                      onChange={(e) => setChecked(ev.id, e.target.checked)}
                      style={{ width: 18, height: 18, accentColor: '#f1cc68', cursor: 'pointer', margin: 0 }}
                    />
                    <label htmlFor={ev.id} style={{ cursor: 'pointer', fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                      {ev.title} <span style={{ color: '#fff5cf', fontWeight: 800, fontSize: 14 }}>· {ev.meta}</span>
                      <span style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#e2edff', marginTop: 2 }}>{ev.desc}</span>
                    </label>
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: '#f2f6ff', whiteSpace: 'nowrap', fontSize: 14, fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: 3 }}
                    >
                      {ev.linkLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontSize: 14, color: '#e2ebff', lineHeight: 1.4, margin: '8px 0 0' }}>
              {d.connectionNote}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
