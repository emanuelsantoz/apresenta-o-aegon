import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Laptop } from '../devices/Devices';
import { Screen, type ScreenSpec } from '../devices/Screen';
import { Reveal } from '../ui/Reveal';

export interface ConsultoriaData {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  consultKicker: string;
  consultTitle: string;
  consultDescription: string;
  steps: { num: string; label: string }[];
  asideTag: string;
  asideTitle: string;
  asideDescription: string;
  asideLinkHref: string;
  asideLinkLabel: string;
  screen: ScreenSpec;
}

/** Seção 02.2 · Consultoria para pequenos negócios + Gestão Financeira Modular (.consult-feature) + Mockup. */
export function ConsultoriaLayout({ d }: { d: ConsultoriaData }) {
  return (
    <div style={{ position: 'absolute', inset: '125px 96px 104px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--electric)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 800, fontSize: 17 }}>
            <span style={{ width: 28, height: 2.5, background: 'currentColor' }} />
            {d.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 style={{ margin: '10px 0 10px', fontSize: 56, lineHeight: 1.06, fontWeight: 800, letterSpacing: '-0.045em', color: 'var(--ink)' }}>
            {d.title[0]} <span style={{ color: 'var(--electric)' }}>{d.title[1]}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ margin: 0, fontSize: 21, lineHeight: 1.45, color: 'var(--muted)', maxWidth: 1080 }}>
            {d.subtitle}
          </p>
        </Reveal>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: 34, alignItems: 'center', flex: 1, margin: '20px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, height: '100%', justifyContent: 'center' }}>
          {/* Bloco principal: Consultoria para pequenos negócios */}
          <Reveal delay={0.15} from="left">
            <div style={{ background: '#ffffff', border: '1px solid #e8e3d9', borderRadius: 24, padding: '32px 36px', boxShadow: '0 16px 40px rgba(0,30,80,0.08)' }}>
              <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 15, fontWeight: 800, color: '#1750a3', marginBottom: 10 }}>
                {d.consultKicker}
              </div>
              <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.045em', color: 'var(--navy)', margin: '0 0 12px' }}>
                {d.consultTitle}
              </h2>
              <p style={{ color: '#40526d', fontSize: 20, lineHeight: 1.55, margin: '0 0 22px' }}>
                {d.consultDescription}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {d.steps.map((s) => (
                  <span
                    key={s.num}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 12, borderRadius: 999,
                      background: '#e7ecf7', padding: '10px 16px', fontSize: 18, color: '#12356e', fontWeight: 800,
                    }}
                  >
                    <b style={{ background: '#073b90', color: '#fff', width: 30, height: 30, borderRadius: '50%', display: 'inline-grid', placeItems: 'center', fontSize: 14 }}>
                      {s.num}
                    </b>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bloco conectado: Produto em avaliação — Gestão Financeira Modular */}
          <Reveal delay={0.22} from="left">
            <div
              data-interactive
              style={{
                background: '#e5ecfb', border: '1px solid #c8d7ef', borderRadius: 24, padding: '26px 34px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
              }}
            >
              <div>
                <div style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 14, fontWeight: 800, color: '#1750a3', marginBottom: 6 }}>
                  {d.asideTag}
                </div>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: 'var(--navy)', margin: '0 0 8px' }}>
                  {d.asideTitle}
                </h3>
                <p style={{ color: '#334969', fontSize: 18, lineHeight: 1.48, margin: 0 }}>
                  {d.asideDescription}
                </p>
              </div>
              <a
                href={d.asideLinkHref}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 22px', borderRadius: 999,
                  background: 'var(--navy)', color: '#fff', fontWeight: 800, fontSize: 17, textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                {d.asideLinkLabel} <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mockup da jornada comercial */}
        <Reveal delay={0.2} from="right" style={{ display: 'flex', justifyContent: 'center' }}>
          <Laptop width={760}><Screen spec={d.screen} expandAt="top-right" /></Laptop>
        </Reveal>
      </div>

      <Reveal delay={0.28}>
        <div style={{ background: '#eef1f8', borderLeft: '5px solid var(--electric)', padding: '16px 24px', borderRadius: '6px 16px 16px 6px', color: '#2b426d', fontSize: 19, display: 'flex', alignItems: 'center', gap: 12 }}>
          <CheckCircle2 size={22} color="var(--electric)" />
          <span>
            <strong>Conexão entre frentes:</strong> a consultoria abre portas com pequenos negócios e valida na prática as dores para o produto modular.
          </span>
        </div>
      </Reveal>
    </div>
  );
}
