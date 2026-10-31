import type { ReactNode } from 'react';
import type { Theme } from '../../types/slide';
import { BrandMark } from './BrandMark';
import { Shapes } from './Shapes';

interface Props {
  theme: Theme;
  index: number;
  total: number;
  section: string;
  children: ReactNode;
  shapes?: 'a' | 'b' | 'c' | 'none';
  /** Esconde o cabeçalho/rodapé (capas). */
  bare?: boolean;
  chromeOnDark?: boolean;
}

const bg: Record<Theme, string> = {
  light: 'var(--ws-canvas)',
  dark: 'radial-gradient(ellipse 55% 60% at 82% 40%, #1350b2 0, transparent 69%), linear-gradient(135deg, #042565, #073e99 65%, #07317b)',
  aurora: 'linear-gradient(135deg, #06172f 0%, #052355 100%)',
};

/** Moldura comum AEGON: fundo, formas, logo aeg[on] e rodapé com seção, lema e número do slide. */
export function SlideFrame({ theme, index, total, section, children, shapes = 'none', bare, chromeOnDark }: Props) {
  const dark = theme !== 'light';
  return (
    <div
      data-slide-frame
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: bg[theme],
        color: dark ? '#fff' : 'var(--c-ink)',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {shapes !== 'none' && <Shapes preset={shapes} dark={dark} />}
      {!bare && (
        <>
          <div style={{ position: 'absolute', left: 96, top: 52, zIndex: 5, display: 'flex', alignItems: 'center', gap: 20 }}>
            <BrandMark dark={dark || chromeOnDark} height={42} />
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: dark || chromeOnDark ? 'rgba(216,231,255,0.75)' : 'var(--muted)',
                borderLeft: `1.5px solid ${dark || chromeOnDark ? 'rgba(255,255,255,0.22)' : 'var(--stroke)'}`,
                paddingLeft: 18,
              }}
            >
              Reunião Estratégica · 31.10.2026
            </span>
          </div>
          <footer
            style={{
              position: 'absolute',
              left: 96,
              right: 96,
              bottom: 40,
              zIndex: 5,
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              fontSize: 'var(--fs-caption)',
              color: dark ? 'var(--ws-on-chrome-muted)' : 'var(--c-ink-soft)',
            }}
          >
            <span style={{ fontWeight: 600, ...(chromeOnDark ? { color: 'var(--ws-on-chrome-muted)' } : undefined) }}>{section}</span>
            <span style={{ flex: 1, height: 1.5, background: dark ? 'rgba(255,255,255,0.16)' : 'var(--c-line)' }} />
            <span style={{ fontSize: 18, fontWeight: 600, opacity: 0.8 }}>Tudo se resolve no mesmo botão.</span>
            <span
              className="num"
              style={{
                fontWeight: 700,
                color: dark ? '#fff' : 'var(--navy)',
                background: dark ? 'rgba(255,255,255,0.12)' : '#fff',
                border: dark ? '1px solid rgba(255,255,255,0.22)' : '1px solid var(--ws-border)',
                padding: '5px 14px',
                borderRadius: 999,
              }}
            >
              {String(index + 1).padStart(2, '0')}
              <span style={{ color: dark ? 'var(--ws-on-chrome-muted)' : 'var(--ws-muted)', fontWeight: 500 }}> / {total}</span>
            </span>
          </footer>
        </>
      )}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>{children}</div>
    </div>
  );
}
