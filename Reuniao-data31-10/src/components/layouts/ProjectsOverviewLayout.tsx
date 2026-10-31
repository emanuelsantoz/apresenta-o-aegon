import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, ArrowRight, Clock, Eye, X } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

export interface ProjectSummaryCard {
  id: string;
  code: string;
  category: string;
  proponent: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  visualBg: string;
  slideHref: string;
  problemAndProposal: string;
  featuresTitle: string;
  features: string[];
  initialVersion: string;
  businessModelTitle: string;
  businessModel: string;
  caution?: string;
}

export interface ProjectsOverviewData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  timePill: string;
  projects: ProjectSummaryCard[];
  closingNote: string;
}

/** Seção 03 · Inovação com propósito (#projetos): grade 2x2 das 4 propostas com modal de exploração + link para slide individual. */
export function ProjectsOverviewLayout({ d }: { d: ProjectsOverviewData }) {
  const [selected, setSelected] = useState<ProjectSummaryCard | null>(null);

  return (
    <div style={{ position: 'absolute', inset: '120px 96px 100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ maxWidth: 1180 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--electric)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
              <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
              {d.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 style={{ margin: '8px 0 10px', fontSize: 56, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.045em', color: 'var(--ink)' }}>
              {d.title[0]} <span style={{ color: 'var(--electric)' }}>{d.title[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ margin: 0, fontSize: 21, lineHeight: 1.42, color: 'var(--muted)', maxWidth: 1080 }}>
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

      {/* Grade 2x2 dos 4 projetos (.project-grid) */}
      <div
        data-interactive
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20, margin: '18px 0', flex: 1 }}
      >
        {d.projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.id} delay={0.12 + i * 0.06} from="up">
              <article
                style={{
                  height: '100%', background: '#ffffff', border: '1px solid #dde0e4', borderRadius: 24,
                  boxShadow: '0 10px 32px rgba(5,30,80,0.07)', overflow: 'hidden', display: 'flex',
                }}
              >
                <div
                  style={{
                    width: 195, background: p.visualBg, position: 'relative', display: 'grid', placeItems: 'center',
                    overflow: 'hidden', flex: 'none',
                  }}
                >
                  <div style={{ position: 'absolute', width: 170, height: 170, border: '20px solid rgba(7,56,142,0.09)', borderRadius: '50%', right: -50, top: -60 }} />
                  <Icon size={66} strokeWidth={1.35} color="var(--blue)" />
                </div>

                <div style={{ flex: 1, padding: '22px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                      <span style={{ fontSize: 14, color: '#12448f', fontWeight: 800, padding: '5px 12px', background: '#ecf1fa', borderRadius: 999 }}>
                        {p.code}
                      </span>
                      <span style={{ fontSize: 14, color: '#12448f', fontWeight: 800, padding: '5px 12px', background: '#ecf1fa', borderRadius: 999 }}>
                        {p.category}
                      </span>
                      <span style={{ fontSize: 14, color: '#12448f', fontWeight: 800, padding: '5px 12px', background: '#ecf1fa', borderRadius: 999 }}>
                        {p.proponent}
                      </span>
                    </div>
                    <h2 style={{ fontSize: 31, fontWeight: 800, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-0.03em' }}>
                      {p.title}
                    </h2>
                    <p style={{ fontSize: 18, lineHeight: 1.42, color: '#4e5d78', margin: 0 }}>
                      {p.summary}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #d0d9e8', marginTop: 12 }}>
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      style={{
                        all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontSize: 17, fontWeight: 800, color: 'var(--blue)', padding: '6px 12px', borderRadius: 999,
                        background: '#edf2ff',
                      }}
                    >
                      <Eye size={18} /> Explorar projeto +
                    </button>
                    <a
                      href={p.slideHref}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 800,
                        color: 'var(--navy)', textDecoration: 'none',
                      }}
                    >
                      Slide dedicado <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.3}>
        <div style={{ background: '#eef1f8', borderLeft: '5px solid var(--electric)', padding: '16px 24px', borderRadius: '6px 16px 16px 6px', color: '#2b426d', fontSize: 20 }}>
          <strong>Decisão esperada:</strong> {d.closingNote}
        </div>
      </Reveal>

      {/* Modal expansível quando o usuário clica em "Explorar projeto +" */}
      {selected && (
        <div
          data-interactive
          onClick={() => setSelected(null)}
          style={{
            position: 'absolute', inset: -120, zIndex: 45, background: 'rgba(5,28,72,0.68)', backdropFilter: 'blur(6px)',
            display: 'grid', placeItems: 'center', padding: 60,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 1180, maxWidth: '100%', background: '#ffffff', borderRadius: 28, padding: '38px 44px',
              boxShadow: '0 28px 80px rgba(0,15,45,0.45)', border: '1px solid var(--stroke)',
              display: 'flex', flexDirection: 'column', gap: 18,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                  {selected.code}
                </span>
                <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                  {selected.category}
                </span>
                <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                  {selected.proponent}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{ all: 'unset', cursor: 'pointer', width: 42, height: 42, borderRadius: '50%', background: '#edf2ff', color: 'var(--navy)', display: 'grid', placeItems: 'center' }}
              >
                <X size={22} />
              </button>
            </div>

            <h2 style={{ fontSize: 44, fontWeight: 800, color: 'var(--navy)', margin: 0, letterSpacing: '-0.04em' }}>
              {selected.title}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <h4 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 6px', fontWeight: 800 }}>
                    Problema e proposta
                  </h4>
                  <p style={{ fontSize: 18, lineHeight: 1.55, color: '#3c4d68', margin: 0 }}>
                    {selected.problemAndProposal}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 6px', fontWeight: 800 }}>
                    Versão inicial a validar
                  </h4>
                  <p style={{ fontSize: 18, lineHeight: 1.55, color: '#3c4d68', margin: 0 }}>
                    {selected.initialVersion}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 6px', fontWeight: 800 }}>
                    {selected.businessModelTitle}
                  </h4>
                  <p style={{ fontSize: 18, lineHeight: 1.55, color: '#3c4d68', margin: 0 }}>
                    {selected.businessModel}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#f8f7f3', padding: '20px 24px', borderRadius: 18, border: '1px solid var(--stroke)' }}>
                  <h4 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 10px', fontWeight: 800 }}>
                    {selected.featuresTitle}
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {selected.features.map((f) => (
                      <li key={f} style={{ fontSize: 18, lineHeight: 1.45, color: '#3c4d68' }}>{f}</li>
                    ))}
                  </ul>
                </div>

                {selected.caution && (
                  <div style={{ borderRadius: 16, padding: '16px 20px', background: '#f8f0dc', color: '#705d35', fontSize: 17, lineHeight: 1.48, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <AlertTriangle size={22} style={{ flex: 'none', marginTop: 2 }} />
                    <div>
                      <strong>Atenção:</strong> {selected.caution}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
