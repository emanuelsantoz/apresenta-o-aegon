import { ArrowUpRight, Copy, Check, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Laptop } from '../devices/Devices';
import { Screen, type ScreenSpec } from '../devices/Screen';
import { BrandMark } from '../stage/BrandMark';
import { Reveal } from '../ui/Reveal';
import { useSlideState } from '../../hooks/useSlideState';
import { copyActionPlanToClipboard } from '../../lib/aegonStore';

export interface CtaData {
  eyebrow: string;
  titleA: string;
  titleB: string;
  text: string;
  cta: { label: string; url: string };
  address?: string;
  screen: ScreenSpec;
}

const shortUrl = (u: string) => u.replace(/^https?:\/\//, '').replace(/\/$/, '');

/** Encerramento da Reunião Estratégica AEGON v3 (#encerramento). */
export function CtaLayout({ d }: { d: CtaData }) {
  const { print } = useSlideState();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyActionPlanToClipboard();
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'absolute', right: -40, bottom: -120, fontFamily: 'var(--font-brand)', fontWeight: 800,
          fontSize: 440, letterSpacing: '-0.2em', color: 'rgba(255,255,255,0.08)', lineHeight: 0.8,
          transform: 'rotate(-13deg)', pointerEvents: 'none', userSelect: 'none',
        }}
      >
        on
      </div>

      <div style={{ position: 'absolute', left: 110, top: 90 }}>
        <Reveal><BrandMark dark height={54} /></Reveal>
      </div>

      <div style={{ position: 'absolute', left: 110, top: 240, width: 860, zIndex: 3 }}>
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 19, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#cbdfff', marginBottom: 28 }}>
            <span style={{ width: 32, height: 2.5, background: 'currentColor', display: 'inline-block' }} />
            {d.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 style={{ margin: 0, fontSize: 96, lineHeight: 1.0, fontWeight: 800, letterSpacing: '-0.055em', fontFamily: 'var(--font-brand)' }}>
            {d.titleA}
            <br />
            <span style={{ color: '#dceaff' }}>{d.titleB}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p style={{ margin: '34px 0 0', fontSize: 31, lineHeight: 1.42, color: '#e3eaf9', fontWeight: 400, maxWidth: 780 }}>
            {d.text}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div data-interactive style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 48, alignItems: 'center' }}>
            <a
              href="#/1"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 30px', borderRadius: 999,
                background: '#ffffff', color: 'var(--navy)', fontSize: 22, fontWeight: 800, textDecoration: 'none',
                boxShadow: '0 14px 34px rgba(0,0,0,0.22)',
              }}
            >
              <RotateCcw size={22} /> Voltar ao início
            </a>

            <button
              type="button"
              onClick={() => void onCopy()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 28px', borderRadius: 999,
                background: 'var(--electric)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)',
                fontSize: 21, fontWeight: 800, cursor: 'pointer',
              }}
            >
              {copied ? <><Check size={22} /> Plano copiado!</> : <><Copy size={22} /> Copiar plano de ação</>}
            </button>

            <a
              href={d.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 28px', borderRadius: 999,
                background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)',
                fontSize: 21, fontWeight: 800, textDecoration: 'none',
              }}
            >
              {d.cta.label} <ArrowUpRight size={22} />
            </a>
          </div>
          <div style={{ marginTop: 22, fontSize: 18, color: 'rgba(255,255,255,0.72)', fontWeight: 600 }}>
            {d.address ?? shortUrl(d.cta.url)} · Reunião estratégica • 31 de outubro de 2026 • Tudo se resolve no mesmo botão.
          </div>
        </Reveal>
      </div>

      <motion.div
        style={{ position: 'absolute', left: 1010, top: 215, zIndex: 2 }}
        initial={print ? false : { opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <Laptop width={820}><Screen spec={d.screen} expandAt="none" /></Laptop>
      </motion.div>
    </>
  );
}
