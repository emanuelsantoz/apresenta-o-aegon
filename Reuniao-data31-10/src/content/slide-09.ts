import { ShoppingCart } from 'lucide-react';
import type { ProjectDetailData } from '../components/layouts/ProjectDetailLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_PROJETOS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-09',
  title: 'Projeto 3.3 · Assistente de Compras',
  section: S_PROJETOS,
  theme: 'light',
  shapes: 'c',
  notes: 'Projeto 3.3 (Proponente: Adilson) — Assistente inteligente de compras conectando preços locais e decisões de consumo.',
};

export const data: ProjectDetailData = {
  code: 'Projeto 3.3',
  category: 'Compras inteligentes',
  proponent: 'Proponente: Adilson',
  title: 'Assistente de Compras',
  summary: 'Uma experiência de compras mais inteligente, conectando preços locais e decisões de consumo.',
  icon: ShoppingCart,
  problemTitle: 'Problema e proposta',
  problemText:
    'Comprar com economia exige comparar preços, ofertas, marcas, distâncias e hábitos. O assistente busca simplificar essa tomada de decisão.',
  featuresTitle: 'Funcionalidades idealizadas',
  features: [
    'Lista de compras com frequência semanal, quinzenal ou mensal.',
    'Raio de busca, marcas preferidas e requisitos por produto.',
    'Pesquisa de preços em fontes disponíveis de supermercados da região.',
    'Comparação por custo total da lista, histórico de gastos e consumo.',
    'Indicadores dos produtos com maior impacto no orçamento.',
  ],
  initialVersionTitle: 'Versão inicial a validar',
  initialVersionText:
    'Uma cidade, uma cesta padronizada e poucos mercados com preços verificáveis. Primeiro provar a utilidade e confiabilidade das informações.',
  revenueTitle: 'Possíveis receitas',
  revenueText:
    'Plano premium para usuários, ferramentas comerciais para supermercados e indicações remuneradas com transparência.',
  caution:
    'Variação de preços, fontes indisponíveis, promoções condicionadas e atualização dos catálogos são riscos centrais.',
  screen: prints.assistenteCompras,
};
