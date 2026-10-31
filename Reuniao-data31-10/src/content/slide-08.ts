import { BarChart3 } from 'lucide-react';
import type { ProjectDetailData } from '../components/layouts/ProjectDetailLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_PROJETOS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-08',
  title: 'Projeto 3.2 · Gestão Financeira Modular (SaaS B2B)',
  section: S_PROJETOS,
  theme: 'light',
  shapes: 'b',
  notes: 'Projeto 3.2 (Proponente: Adilson) — Produto de gestão financeira modular para pequenas e médias empresas.',
};

export const data: ProjectDetailData = {
  code: 'Projeto 3.2',
  category: 'SaaS B2B',
  proponent: 'Proponente: Adilson',
  title: 'Gestão Financeira Modular',
  summary: 'Um produto de gestão pensado para crescer por módulos, sem impor complexidade desnecessária às empresas.',
  icon: BarChart3,
  problemTitle: 'Problema e proposta',
  problemText:
    'Pequenas e médias organizações precisam organizar sua gestão financeira sem contratar sistemas complexos e caros. A proposta é comercializar apenas os módulos de que cada empresa necessita.',
  featuresTitle: 'Funcionalidades possíveis',
  features: [
    'Planejamento e acompanhamento orçamentário.',
    'Receitas, despesas e centros de custos.',
    'Estoque, compras e processos de aprovação.',
    'Relatórios, dashboards e exportações.',
  ],
  initialVersionTitle: 'Versão inicial a validar',
  initialVersionText:
    'Orçamento + lançamentos + centros de custos + indicadores essenciais, em produto independente.',
  revenueTitle: 'Modelo de negócio',
  revenueText:
    'Assinatura mensal por plataforma-base, complementada por módulos, usuários ou unidades.',
  caution:
    'A experiência anterior pode orientar o conceito, mas a Aegon deve validar a titularidade e não reutilizar código, dados ou ativos de terceiros sem autorização.',
  screen: prints.gestaoFinanceira,
};
