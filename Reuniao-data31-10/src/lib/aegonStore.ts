import { useSyncExternalStore } from 'react';

/**
 * Armazenamento reativo em localStorage (prefixo `aegon2026:`) para todas as
 * funcionalidades interativas da Reunião Estratégica AEGON v3:
 * - Matriz de priorização (notas 1–5 por critério e projeto)
 * - Checklist de eventos regionais (meta de 3 escolhas)
 * - Plano de ação de 30 dias (checkbox + responsável + prazo + exportação em texto)
 */

const PREFIX = 'aegon2026:';
const listeners = new Set<() => void>();
let snapshotVersion = 0;

function emit() {
  snapshotVersion++;
  listeners.forEach((l) => l());
}

export function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(PREFIX + key, value);
  } catch {
    /* ignore */
  }
  emit();
}

export function useAegonStorageVersion(): number {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => snapshotVersion,
  );
}

export const CRITERIA_LIST = [
  'Demanda real',
  'Potencial de receita',
  'Viabilidade técnica',
  'Investimento inicial',
  'Disponibilidade da equipe',
  'Prazo de validação',
] as const;

export const PROJECT_NAMES = [
  'Projeto Andresa',
  'Gestão Financeira',
  'Assistente de Compras',
  'YouTube',
] as const;

export interface EventItemDef {
  id: string;
  group: 'confirmados' | 'monitorar';
  title: string;
  meta: string;
  desc: string;
  url: string;
  linkLabel: string;
}

export const EVENTS_LIST: EventItemDef[] = [
  {
    id: 'event1v3',
    group: 'confirmados',
    title: 'Business Innovation Day — Bauru',
    meta: '11 e 12/11/2026 · Alameda Hall',
    desc: 'Networking empresarial, inovação e potencial de prospecção de clientes.',
    url: 'https://conexao.bid/',
    linkLabel: 'Site oficial ↗',
  },
  {
    id: 'event2v3',
    group: 'confirmados',
    title: 'Mundo SENAI — Bauru, Jaú e Botucatu',
    meta: '05 e 06/11/2026 · Unidades locais',
    desc: 'Tecnologia aplicada, networking técnico e aproximação com o ecossistema regional.',
    url: 'https://www.sp.senai.br/mundo-senai-2026',
    linkLabel: 'Programação ↗',
  },
  {
    id: 'event3v3',
    group: 'monitorar',
    title: 'Jaú Summit — Jaú',
    meta: 'Próxima edição: data não divulgada',
    desc: 'Referência regional em tecnologia, transformação digital e empreendedorismo; foco em contatos comerciais.',
    url: 'https://www.jausummit.com.br/',
    linkLabel: 'Site oficial ↗',
  },
  {
    id: 'event4v3',
    group: 'monitorar',
    title: 'Circuito de Inovação e Empreendedorismo — Jaú',
    meta: 'Programação da próxima edição a confirmar',
    desc: 'Palestras e conexões locais, incluindo iniciativas de inovação e tecnologia.',
    url: 'https://www.jau.sp.gov.br/secretaria-desenvolvimento-economico/ciej',
    linkLabel: 'Saiba mais ↗',
  },
  {
    id: 'event5v3',
    group: 'monitorar',
    title: 'Feira do Empreendedor do Sebrae-SP',
    meta: 'São Paulo · próxima edição a confirmar',
    desc: 'Validar a proposta de consultoria para pequenos negócios e conversar com possíveis clientes. A edição de 2026 já ocorreu.',
    url: 'https://feiradoempreendedor.sebraesp.com.br/',
    linkLabel: 'Site oficial ↗',
  },
];

export interface PlanTaskDef {
  taskKey: string;
  ownerKey: string;
  dateKey: string;
  label: string;
}

export const PLAN_TASKS: PlanTaskDef[] = [
  { taskKey: 'task1', ownerKey: 'owner1', dateKey: 'date1', label: 'Projeto prioritário, hipótese e primeira validação' },
  { taskKey: 'task2', ownerKey: 'owner2', dateKey: 'date2', label: 'Custos, viabilidade e orçamento inicial' },
  { taskKey: 'task3', ownerKey: 'owner3', dateKey: 'date3', label: 'Atualizar site, portfólio e proposta comercial' },
  { taskKey: 'task4', ownerKey: 'owner4', dateKey: 'date4', label: 'Cotações de camisetas e cadernos' },
  { taskKey: 'task5', ownerKey: 'owner5', dateKey: 'date5', label: 'Abordagem de parceiros prioritários' },
  { taskKey: 'task6', ownerKey: 'owner6', dateKey: 'date6', label: 'Selecionar 3 eventos e definir objetivos comerciais' },
  { taskKey: 'task7', ownerKey: 'owner7', dateKey: 'date7', label: 'Próxima reunião e entregas individuais' },
  { taskKey: 'task8v3', ownerKey: 'owner8v3', dateKey: 'date8v3', label: 'Validar uma oferta-piloto de consultoria para pequenos negócios' },
];

export function getScore(rowIdx: number, projIdx: number): string {
  return safeGet(`score${rowIdx}-${projIdx}`) ?? '';
}

export function setScore(rowIdx: number, projIdx: number, val: string): void {
  safeSet(`score${rowIdx}-${projIdx}`, val);
}

export function getProjectTotal(projIdx: number): number {
  return CRITERIA_LIST.reduce((acc, _, r) => {
    const v = Number(getScore(r, projIdx));
    return acc + (Number.isFinite(v) ? v : 0);
  }, 0);
}

export function isChecked(key: string): boolean {
  return safeGet(key) === '1';
}

export function setChecked(key: string, checked: boolean): void {
  safeSet(key, checked ? '1' : '0');
}

export function getSelectedEventsCount(): number {
  return EVENTS_LIST.filter((e) => isChecked(e.id)).length;
}

export function formatActionPlanReport(): string {
  const lines = [
    'AEGON | REUNIÃO ESTRATÉGICA | 31/10/2026',
    '',
    'PLANO DE AÇÃO — PRÓXIMOS 30 DIAS',
  ];

  PLAN_TASKS.forEach((item, i) => {
    const checked = isChecked(item.taskKey) ? '[x]' : '[ ]';
    const owner = safeGet(item.ownerKey)?.trim() || 'A definir';
    const date = safeGet(item.dateKey)?.trim() || 'A definir';
    lines.push(`${checked} ${i + 1}. ${item.label}\n    Responsável: ${owner} | Prazo: ${date}`);
  });

  lines.push('', 'EVENTOS DE INTERESSE / ACOMPANHAMENTO:');
  EVENTS_LIST.forEach((ev) => {
    if (isChecked(ev.id)) {
      lines.push(`- ${ev.title}`);
    }
  });

  lines.push('', 'MATRIZ DE PRIORIZAÇÃO:');
  PROJECT_NAMES.forEach((name, j) => {
    lines.push(`${name}: ${getProjectTotal(j)}/30`);
  });

  return lines.join('\n');
}

export async function copyActionPlanToClipboard(): Promise<boolean> {
  const output = formatActionPlanReport();
  try {
    await navigator.clipboard.writeText(output);
    return true;
  } catch {
    const input = document.createElement('textarea');
    input.value = output;
    document.body.appendChild(input);
    input.select();
    const success = document.execCommand('copy');
    input.remove();
    return success;
  }
}
