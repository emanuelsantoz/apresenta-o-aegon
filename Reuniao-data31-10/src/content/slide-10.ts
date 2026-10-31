import { PlaySquare } from 'lucide-react';
import type { ProjectDetailData } from '../components/layouts/ProjectDetailLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_PROJETOS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-10',
  title: 'Projeto 3.4 · Canal no YouTube (Mídia e marca)',
  section: S_PROJETOS,
  theme: 'light',
  shapes: 'b',
  notes: 'Projeto 3.4 (Proponente: Gabriel) — Proposta criativa para ampliar a presença da Aegon, compartilhar conhecimento e abrir conversas comerciais.',
};

export const data: ProjectDetailData = {
  code: 'Projeto 3.4',
  category: 'Mídia e marca',
  proponent: 'Proponente: Gabriel',
  title: 'Canal no YouTube',
  summary: 'Uma proposta criativa para ampliar a presença da Aegon, compartilhar conhecimento e abrir conversas comerciais.',
  icon: PlaySquare,
  problemTitle: 'Objetivo e proposta',
  problemText:
    'Construir autoridade de marca, compartilhar aprendizados práticos sobre design, tecnologia e negócios e criar um canal próprio de relacionamento comercial.',
  featuresTitle: 'Pontos para Gabriel apresentar',
  features: [
    'Conceito e temática do canal.',
    'Público-alvo e diferenciais de conteúdo.',
    'Formato, produção, edição e frequência.',
    'Relação com a marca Aegon ou projeto independente.',
    'Custos, dedicação necessária e próximos testes.',
  ],
  initialVersionTitle: 'Versão inicial a validar',
  initialVersionText:
    'Definir linha editorial e produzir um episódio piloto antes de estabelecer uma agenda de publicação.',
  revenueTitle: 'Possibilidades de retorno',
  revenueText:
    'Autoridade de marca, aquisição de clientes, patrocínios e monetização de conteúdo — hipóteses a validar, não receitas garantidas.',
  screen: prints.canalYoutube,
};
