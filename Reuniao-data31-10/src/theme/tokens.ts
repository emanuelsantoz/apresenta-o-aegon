/**
 * Tokens de design — AEGON | Reunião Estratégica v3.
 * Espelhados em src/styles/tokens.css — altere os dois juntos.
 */
export const workspace = {
  chrome: '#052C72',
  primary: '#063A96',
  action: '#1250BF',
  canvas: '#F8F7F3',
  selection: '#E8EFFF',
  text: '#10203B',
  muted: '#455573',
  border: '#DEDFE2',
  gold: '#E5BD5A',
  inkDark: '#06172F',
} as const;

/** Status: apenas em badges discretos (tint + texto). */
export const status = {
  success: { fg: '#063A96', bg: '#E8EFFF' },
  alert: { fg: '#705D35', bg: '#F8F0DC' },
  danger: { fg: '#B91C1C', bg: '#FEE2E2' },
  info: { fg: '#1250BF', bg: '#EDF2FF' },
} as const;

export const stage = { width: 1920, height: 1080 } as const;

export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  slide: 0.5,
  reveal: 0.45,
  stagger: 0.08,
} as const;
