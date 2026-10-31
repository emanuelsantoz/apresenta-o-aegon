import { motion } from 'motion/react';
import { useSlideState } from '../../hooks/useSlideState';

/** Anel circular e marca d'água "on" característicos do visual AEGON v3. */
interface ShapeSpec {
  x: number;
  y: number;
  size: number;
  rot: number;
  kind: 'ring' | 'ringInner' | 'watermarkOn';
  drift: number;
}

const presets: Record<string, ShapeSpec[]> = {
  a: [
    { x: 1380, y: -260, size: 760, rot: 0, kind: 'ring', drift: 16 },
    { x: 1500, y: -140, size: 520, rot: 0, kind: 'ringInner', drift: 12 },
    { x: 1440, y: 660, size: 380, rot: -13, kind: 'watermarkOn', drift: 14 },
  ],
  b: [
    { x: 1520, y: -180, size: 560, rot: 0, kind: 'ring', drift: 14 },
    { x: -160, y: 680, size: 520, rot: 0, kind: 'ringInner', drift: 18 },
  ],
  c: [
    { x: -180, y: -180, size: 540, rot: 0, kind: 'ring', drift: 16 },
    { x: 1480, y: 680, size: 360, rot: -13, kind: 'watermarkOn', drift: 14 },
  ],
};

/** Formas decorativas AEGON flutuando suavemente sem competir com o conteúdo. */
export function Shapes({ preset = 'a', dark }: { preset?: keyof typeof presets; dark?: boolean }) {
  const { print } = useSlideState();
  const ringBorder = dark ? 'rgba(255,255,255,0.11)' : 'rgba(6,58,150,0.09)';
  const ringInnerBorder = dark ? 'rgba(216,231,255,0.14)' : 'rgba(18,80,191,0.12)';
  const onColor = dark ? 'rgba(255,255,255,0.055)' : 'rgba(5,44,114,0.045)';

  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {(presets[preset] ?? presets.a).map((s, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: s.x, top: s.y, rotate: s.rot }}
          animate={print ? undefined : { y: [0, -s.drift, 0] }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {s.kind === 'watermarkOn' ? (
            <div
              style={{
                fontFamily: 'Manrope, var(--font-brand)',
                fontWeight: 800,
                fontSize: s.size,
                letterSpacing: '-0.18em',
                lineHeight: 0.85,
                color: onColor,
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              on
            </div>
          ) : (
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                border: `1.5px solid ${s.kind === 'ring' ? ringBorder : ringInnerBorder}`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
