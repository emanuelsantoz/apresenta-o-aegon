import type { ConsultoriaData } from '../components/layouts/ConsultoriaLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_POSICIONAMENTO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-05',
  title: '02.2 · Consultoria para pequenos negócios',
  section: S_POSICIONAMENTO,
  theme: 'light',
  shapes: 'c',
  notes: 'Detalhamento da proposta comercial de Consultoria para Pequenos Negócios (4 etapas) e sua conexão com a Gestão Financeira Modular.',
};

export const data: ConsultoriaData = {
  eyebrow: '02 · Proposta comercial em validação',
  title: ['Consultoria prática para', 'pequenos negócios.'],
  subtitle:
    'Uma porta de entrada comercial objetiva para gerar caixa, criar relacionamento com empreendedores locais e validar dores reais.',
  consultKicker: 'Proposta comercial para validar',
  consultTitle: 'Consultoria para pequenos negócios.',
  consultDescription:
    'Uma jornada prática para quem precisa organizar a presença digital e os processos do negócio, sem contratar soluções desnecessárias. A proposta é começar pequeno, ouvir o empreendedor e entregar melhorias que ele consiga perceber.',
  steps: [
    { num: '01', label: 'Diagnóstico' },
    { num: '02', label: 'Plano de ação' },
    { num: '03', label: 'Implementação' },
    { num: '04', label: 'Acompanhamento' },
  ],
  asideTag: 'Produto em avaliação',
  asideTitle: 'Gestão Financeira Modular',
  asideDescription:
    'Uma possível evolução da oferta para clientes que precisem de controle orçamentário, despesas, centros de custo e indicadores. Comercialização e escopo ainda sujeitos à validação.',
  asideLinkHref: '#/8',
  asideLinkLabel: 'Conhecer a proposta',
  screen: prints.aegonConsultoria,
};
