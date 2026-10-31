import { Calendar, CheckCircle2, DollarSign, ListChecks, Target } from 'lucide-react';
import type { OperacaoData } from '../components/layouts/OperacaoLayout';
import type { SlideMeta } from '../types/slide';
import { S_OPERACAO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-14',
  title: '07 · Competências distintas. Construção conjunta.',
  section: S_OPERACAO,
  theme: 'light',
  shapes: 'c',
  notes: 'Bloco 07 (15 minutos): responsabilidades claras dão autonomia; prioridades, investimentos e decisões de produto permanecem compartilhados.',
};

export const data: OperacaoData = {
  eyebrow: '07 · Três frentes, uma direção',
  title: ['Competências distintas.', 'Construção conjunta.'],
  subtitle:
    'Responsabilidades claras dão autonomia. A definição de prioridades, os investimentos e as decisões de produto permanecem compartilhados entre os sócios.',
  timePill: '15 minutos',
  roles: [
    {
      mark: 'A',
      kicker: 'Estratégia, projetos e finanças',
      name: 'Adilson',
      description:
        'Conecta a visão do negócio à execução: transforma ideias em projetos estruturados, organiza custos, acompanha prioridades e avalia resultados.',
      outputsLabel: 'Entregas de referência',
      outputs: 'Roadmap • orçamento • viabilidade • indicadores',
    },
    {
      mark: 'G',
      kicker: 'Criação, marca e experiência',
      name: 'Gabriel',
      description:
        'Traduz ideias em experiências reconhecíveis e intuitivas: lidera direção criativa, design, UX, marketing e a comunicação dos projetos.',
      outputsLabel: 'Entregas de referência',
      outputs: 'Identidade • interfaces • apresentações • conteúdo',
    },
    {
      mark: 'E',
      kicker: 'Tecnologia e engenharia de produto',
      name: 'Emanuel',
      description:
        'Transforma as soluções propostas em produtos funcionais: conduz prototipação, arquitetura, desenvolvimento de sites, apps e sistemas de informação.',
      outputsLabel: 'Entregas de referência',
      outputs: 'MVP • arquitetura • integrações • qualidade técnica',
    },
  ],
  ribbon: [
    { icon: DollarSign, label: 'Limite de investimento' },
    { icon: CheckCircle2, label: 'Decisões conjuntas' },
    { icon: ListChecks, label: 'Painel de entregas' },
    { icon: Calendar, label: 'Ritmo de reuniões' },
    { icon: Target, label: 'Resultados mensuráveis' },
  ],
  closingNote: 'definir as entregas de cada área, os pontos de decisão conjunta e uma rotina de acompanhamento que seja possível manter.',
};
