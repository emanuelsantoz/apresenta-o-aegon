import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Laptop, Tablet } from '../devices/Devices';
import { Screen, type ScreenSpec } from '../devices/Screen';
import { BrandMark } from '../stage/BrandMark';
import { Reveal } from '../ui/Reveal';
import { useSlideState } from '../../hooks/useSlideState';

export interface CoverData {
  eyebrow: string;
  titleLine1: string;
  titleEm: string;
  titleLine3: string;
  subtitle: string;
  date: string;
  team: string;
  duration: string;
  metrics: { value: string; label: string }[];
  tablet: ScreenSpec;
  laptop: ScreenSpec;
}

/** Capa AEGON v3: tipografia Manrope de impacto, metadados da reunião, métricas de panorama e mockups à direita. */
export function CoverLayout({ d }: { d: CoverData }) {
  const { print } = useSlideState();
  return (
    <>
      <div style={{ position: 'absolute', left: 96, top: 64, right: 96, display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5 }}>
        <Reveal><BrandMark dark height={52} /></Reveal>
        <Reveal delay={0.05}>
          <div data-interactive style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {[
              ['Retomada', '#/3'],
              ['Soluções', '#/4'],
              ['Projetos', '#/6'],
              ['Critérios', '#/11'],
              ['Marca', '#/12'],
              ['Conexões', '#/13'],
              ['Operação', '#/14'],
              ['Ações', '#/15'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  color: '#eaf1ff',
                  fontSize: 17,
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{ position: 'absolute', left: 96, top: 185, width: 880, zIndex: 4 }}>
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontSize: 18, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d2dff9', marginBottom: 24 }}>
            <span style={{ width: 34, height: 2.5, background: 'currentColor', display: 'inline-block' }} />
            {d.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 style={{ margin: 0, fontSize: 112, lineHeight: 0.96, fontWeight: 800, letterSpacing: '-0.075em', fontFamily: 'var(--font-brand)' }}>
            {d.titleLine1}
            <br />
            <span style={{ color: '#d9dde2' }}>{d.titleEm}</span>
            <br />
            {d.titleLine3} <span style={{ color: '#f2f4ff', border: '4px solid currentColor', borderRadius: 999, padding: '0 22px 6px 14px', fontSize: '0.74em', display: 'inline-block', transform: 'translateY(-6px)' }}>on.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p style={{ margin: '28px 0 0', fontSize: 29, lineHeight: 1.38, color: '#e2ebfc', fontWeight: 500, maxWidth: 740 }}>
            {d.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div data-interactive style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 34 }}>
            <a
              href="#/2"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 28px', borderRadius: 999,
                background: '#ffffff', color: 'var(--navy)', fontSize: 21, fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
              }}
            >
              Explorar a pauta <ArrowRight size={22} />
            </a>
            <a
              href="#/15"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 28px', borderRadius: 999,
                border: '1.5px solid rgba(255,255,255,0.75)', background: 'rgba(4,27,70,0.18)', color: '#ffffff',
                fontSize: 21, fontWeight: 800, textDecoration: 'none',
              }}
            >
              Ir para Plano de Ação
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: 34, color: '#e0e9fc', fontSize: 19 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Calendar size={20} color="var(--gold)" /> <strong>{d.date}</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Users size={20} color="var(--gold)" /> <strong>{d.team}</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Clock size={20} color="var(--gold)" /> <strong>{d.duration}</strong>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Composição visual direita inspirada no Hero do site v3 */}
      <div
        aria-hidden
        style={{
          position: 'absolute', right: 40, top: 120, fontSize: 380, fontWeight: 800, letterSpacing: '-0.15em',
          color: '#f4f0e9', opacity: 0.12, lineHeight: 0.9, transform: 'rotate(-13deg)', userSelect: 'none', pointerEvents: 'none',
        }}
      >
        on
      </div>

      <motion.div
        style={{ position: 'absolute', left: 1010, top: 155, zIndex: 2 }}
        initial={print ? false : { opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
      >
        <Laptop width={830}><Screen spec={d.laptop} expandAt="none" /></Laptop>
      </motion.div>

      <motion.div
        style={{ position: 'absolute', left: 1185, top: 495, zIndex: 3 }}
        initial={print ? false : { opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
      >
        <Tablet width={560}><Screen spec={d.tablet} expandAt="none" /></Tablet>
      </motion.div>

      <motion.div
        style={{
          position: 'absolute', right: 86, top: 140, zIndex: 4, background: '#fff', color: 'var(--navy)',
          padding: '16px 24px', borderRadius: 18, boxShadow: '0 14px 36px rgba(5,30,80,0.22)',
          transform: 'rotate(6deg)', fontWeight: 800, fontSize: 19, lineHeight: 1.25,
        }}
        initial={print ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Tudo se resolve
        <br />
        no mesmo botão.
      </motion.div>

      <motion.div
        style={{
          position: 'absolute', left: 1015, top: 690, zIndex: 4, width: 124, height: 124, borderRadius: '50%',
          background: '#f2ece1', color: 'var(--navy)', display: 'grid', placeItems: 'center',
          boxShadow: '0 18px 42px rgba(0,23,64,0.45)', fontFamily: 'var(--font-brand)', fontWeight: 800,
          fontSize: 64, letterSpacing: '-0.15em', paddingRight: 8,
        }}
        initial={print ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        on
      </motion.div>

      {/* Barra de métricas de panorama da reunião */}
      <Reveal delay={0.36}>
        <div
          style={{
            position: 'absolute', left: 96, right: 96, bottom: 38, zIndex: 5,
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: '#061d47', color: '#fff', border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 22, padding: '20px 28px', boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
          }}
        >
          {d.metrics.map((m, i) => (
            <div
              key={m.value}
              style={{
                display: 'flex', alignItems: 'center', gap: 20, padding: '4px 28px',
                borderRight: i < d.metrics.length - 1 ? '1px solid rgba(255,255,255,0.16)' : 'none',
              }}
            >
              <strong style={{ fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 52, letterSpacing: '-0.07em', color: '#fff', lineHeight: 1 }}>
                {m.value}
              </strong>
              <span style={{ fontSize: 20, color: '#d4dfef', fontWeight: 500, lineHeight: 1.3 }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
