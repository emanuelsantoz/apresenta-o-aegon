import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Laptop } from '../devices/Devices';
import { Screen, type ScreenSpec } from '../devices/Screen';
import { Reveal } from '../ui/Reveal';

export interface ProjectDetailData {
  code: string;
  category: string;
  proponent: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  problemTitle: string;
  problemText: string;
  featuresTitle: string;
  features: string[];
  initialVersionTitle: string;
  initialVersionText: string;
  revenueTitle: string;
  revenueText: string;
  caution?: string;
  screen: ScreenSpec;
}

/** Slide dedicado a cada uma das 4 propostas de inovação (3.1 a 3.4) com mockup interativo à direita. */
export function ProjectDetailLayout({ d }: { d: ProjectDetailData }) {
  const Icon = d.icon;
  return (
    <div style={{ position: 'absolute', inset: '120px 96px 98px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Topo com chips e link de retorno para a visão geral dos projetos */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 28 }}>
        <div>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                {d.code}
              </span>
              <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                {d.category}
              </span>
              <span style={{ fontSize: 15, color: '#12448f', fontWeight: 800, padding: '6px 14px', background: '#ecf1fa', borderRadius: 999 }}>
                {d.proponent}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ width: 60, height: 60, borderRadius: 18, background: '#e8efff', color: 'var(--blue)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                <Icon size={32} />
              </span>
              <div>
                <h1 style={{ margin: 0, fontSize: 54, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--ink)' }}>
                  {d.title}
                </h1>
                <p style={{ margin: '6px 0 0', fontSize: 21, color: 'var(--muted)' }}>
                  {d.summary}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <a
            data-interactive
            href="#/6"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 999,
              border: '1.5px solid #c8d7f5', background: '#f1f5ff', color: 'var(--navy)', fontSize: 16, fontWeight: 800,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            <ArrowLeft size={17} /> Todos os projetos
          </a>
        </Reveal>
      </div>

      {/* Conteúdo principal + Mockup */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 32, alignItems: 'center', flex: 1, margin: '18px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Reveal delay={0.12} from="left">
            <div style={{ background: '#ffffff', border: '1px solid var(--stroke)', borderRadius: 20, padding: '22px 26px', boxShadow: '0 8px 24px rgba(5,30,80,0.05)' }}>
              <h3 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--electric)', margin: '0 0 8px', fontWeight: 800 }}>
                {d.problemTitle}
              </h3>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: '#3c4d68', margin: 0 }}>
                {d.problemText}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18} from="left">
            <div style={{ background: '#ffffff', border: '1px solid var(--stroke)', borderRadius: 20, padding: '22px 26px', boxShadow: '0 8px 24px rgba(5,30,80,0.05)' }}>
              <h3 style={{ fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--electric)', margin: '0 0 10px', fontWeight: 800 }}>
                {d.featuresTitle}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {d.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 18, lineHeight: 1.4, color: '#3c4d68' }}>
                    <CheckCircle2 size={20} color="var(--blue)" style={{ flex: 'none', marginTop: 2 }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24} from="left">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: '#f4f2ec', border: '1px solid #e7e5de', borderRadius: 18, padding: '18px 22px' }}>
                <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 6px', fontWeight: 800 }}>
                  {d.initialVersionTitle}
                </h4>
                <p style={{ fontSize: 17, lineHeight: 1.45, color: '#3c4d68', margin: 0 }}>
                  {d.initialVersionText}
                </p>
              </div>
              <div style={{ background: '#edf2ff', border: '1px solid #c8d7f5', borderRadius: 18, padding: '18px 22px' }}>
                <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--navy)', margin: '0 0 6px', fontWeight: 800 }}>
                  {d.revenueTitle}
                </h4>
                <p style={{ fontSize: 17, lineHeight: 1.45, color: '#3c4d68', margin: 0 }}>
                  {d.revenueText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} from="right" style={{ display: 'flex', justifyContent: 'center' }}>
          <Laptop width={750}><Screen spec={d.screen} expandAt="top-right" /></Laptop>
        </Reveal>
      </div>

      {/* Aviso de atenção (.caution) */}
      {d.caution ? (
        <Reveal delay={0.3}>
          <div style={{ borderRadius: 16, padding: '15px 22px', background: '#f8f0dc', border: '1px solid #ebd9ad', color: '#705d35', fontSize: 18, lineHeight: 1.42, display: 'flex', alignItems: 'center', gap: 14 }}>
            <AlertTriangle size={24} style={{ flex: 'none' }} />
            <span>
              <strong>Atenção:</strong> {d.caution}
            </span>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={0.3}>
          <div style={{ background: '#eef1f8', borderLeft: '5px solid var(--electric)', padding: '15px 22px', borderRadius: '6px 16px 16px 6px', color: '#2b426d', fontSize: 18 }}>
            <strong>Próximo passo recomendado:</strong> avaliar esta proposta na Matriz de Priorização (Seção 04) com notas de 1 a 5.
          </div>
        </Reveal>
      )}
    </div>
  );
}
