import type { RetomadaData } from '../components/layouts/RetomadaLayout';
import type { SlideMeta } from '../types/slide';
import { S_RETOMADA } from './sections';

export const meta: SlideMeta = {
  id: 'slide-03',
  title: '01 · Retomar a conexão. Alinhar o futuro.',
  section: S_RETOMADA,
  theme: 'light',
  shapes: 'b',
  notes: 'Bloco 01 (10 minutos): cada sócio compartilha expectativas e qual compromisso concreto consegue assumir pelos próximos 30 dias.',
};

export const data: RetomadaData = {
  eyebrow: '01 · Pessoas e direção',
  title: ['Retomar a conexão.', 'Alinhar o futuro.'],
  subtitle:
    'Depois de um período dedicado a outras demandas profissionais, retomamos a Aegon com um objetivo simples: combinar visão, compromissos e próximos passos que caibam na nossa realidade.',
  timePill: '10 minutos',
  quoteStart: 'Antes de decidir',
  quoteHighlight: 'o que lançar,',
  quoteEnd: 'precisamos saber que empresa queremos construir.',
  introCopy:
    'Compartilhar expectativas, reconhecer aprendizados e assumir compromissos que consigamos sustentar. A confiança é o ponto de partida.',
  prompt: 'Pergunta-chave: qual compromisso concreto cada um consegue assumir pelos próximos 30 dias?',
  team: [
    {
      initial: 'A',
      name: 'Adilson',
      desc: 'Estratégia e gestão: planejamento dos projetos, organização financeira e acompanhamento de resultados.',
    },
    {
      initial: 'G',
      name: 'Gabriel',
      desc: 'Criação e posicionamento: direção criativa, branding, marketing, UX e materiais institucionais.',
    },
    {
      initial: 'E',
      name: 'Emanuel',
      desc: 'Produto e tecnologia: protótipos, desenvolvimento de sites, aplicativos, integrações e sistemas.',
    },
  ],
  closingNote: 'visão compartilhada, disponibilidade realista e acordos claros entre os sócios.',
};
