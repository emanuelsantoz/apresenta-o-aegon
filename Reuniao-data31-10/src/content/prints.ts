import type { ScreenSpec } from '../components/devices/Screen';

/**
 * Catálogo de telas/prints usados nos mockups da apresentação AEGON.
 * No Modo Edição (tecla E), qualquer tela pode receber um print real por upload ou drag-and-drop.
 */
export const prints = {
  aegonPauta: { printId: 'aegon-01-pauta', label: 'Capa · Pauta Estratégica', fallback: 'pauta-estrategica' },
  aegonSite: { printId: 'aegon-02-site', label: 'Site Institucional AEGON', fallback: 'site-institucional' },
  aegonConsultoria: { printId: 'aegon-03-consultoria', label: 'Consultoria Pequenos Negócios', fallback: 'consultoria-pme' },
  projetoAndresa: { printId: 'aegon-04-andresa', label: 'Projeto 3.1 · Projeto Andresa', fallback: 'projeto-andresa' },
  gestaoFinanceira: { printId: 'aegon-05-financeiro', label: 'Projeto 3.2 · Gestão Financeira Modular', fallback: 'gestao-financeira' },
  assistenteCompras: { printId: 'aegon-06-compras', label: 'Projeto 3.3 · Assistente de Compras', fallback: 'assistente-compras' },
  canalYoutube: { printId: 'aegon-07-youtube', label: 'Projeto 3.4 · Canal no YouTube', fallback: 'canal-youtube' },
} satisfies Record<string, ScreenSpec>;
