import { BarChart3, HeartHandshake, PlaySquare, ShoppingCart } from 'lucide-react';
import type { ProjectsOverviewData } from '../components/layouts/ProjectsOverviewLayout';
import type { SlideMeta } from '../types/slide';
import { S_PROJETOS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-06',
  title: '03 · Quatro ideias. Problemas reais.',
  section: S_PROJETOS,
  theme: 'light',
  shapes: 'b',
  notes: 'Bloco 03 (45 minutos): visão geral das 4 propostas. Clique em "Explorar projeto +" para abrir os detalhes ou avance para os slides dedicados (07 a 10).',
};

export const data: ProjectsOverviewData = {
  eyebrow: '03 · Inovação com propósito',
  title: ['Quatro ideias.', 'Problemas reais.'],
  subtitle:
    'Mais do que imaginar funcionalidades, queremos avaliar o valor para as pessoas. Abra cada projeto para explorar problema, solução, oportunidade de receita, primeiro teste e riscos.',
  timePill: '45 minutos',
  projects: [
    {
      id: 'andresa',
      code: 'Projeto 3.1',
      category: 'IA e cuidado',
      proponent: 'Proponente: Adilson',
      title: 'Projeto Andresa',
      summary: 'Tecnologia de apoio à comunicação, conectando pessoas com Alzheimer, familiares e cuidadores.',
      icon: HeartHandshake,
      visualBg: '#eaf0fb',
      slideHref: '#/7',
      problemAndProposal:
        'Famílias e cuidadores enfrentam desafios para acompanhar conversas, necessidades e mudanças na rotina de pessoas com Alzheimer, especialmente nos estágios avançados. A proposta é oferecer um canal de comunicação assistida e informações úteis ao cuidador.',
      featuresTitle: 'Funcionalidades idealizadas',
      features: [
        'Chamadas de voz com agente de IA personalizado, com voz sintética de familiar devidamente autorizada.',
        'Transcrição e resumos das conversas para o responsável.',
        'Identificação de possíveis alterações de padrão e avisos que solicitem avaliação humana.',
        'Painel de acompanhamento e histórico acessível ao familiar autorizado.',
      ],
      initialVersion: 'Chamada assistida, resumo pós-conversa e painel simples, testados com orientação de especialistas e cuidadores.',
      businessModelTitle: 'Modelo de negócio',
      businessModel: 'Assinatura familiar ou contratação por instituições/serviços de cuidado, a validar em pesquisa.',
      caution:
        'Não apresentar detecção de emergência como diagnóstico ou sistema garantido de proteção. Avaliar LGPD, consentimento, transparência sobre a IA, direitos de voz e requisitos clínicos/regulatórios antes de ofertar.',
    },
    {
      id: 'financeiro',
      code: 'Projeto 3.2',
      category: 'SaaS B2B',
      proponent: 'Proponente: Adilson',
      title: 'Gestão Financeira Modular',
      summary: 'Um produto de gestão pensado para crescer por módulos, sem impor complexidade desnecessária às empresas.',
      icon: BarChart3,
      visualBg: '#e7ebf4',
      slideHref: '#/8',
      problemAndProposal:
        'Pequenas e médias organizações precisam organizar sua gestão financeira sem contratar sistemas complexos e caros. A proposta é comercializar apenas os módulos de que cada empresa necessita.',
      featuresTitle: 'Funcionalidades possíveis',
      features: [
        'Planejamento e acompanhamento orçamentário.',
        'Receitas, despesas e centros de custos.',
        'Estoque, compras e processos de aprovação.',
        'Relatórios, dashboards e exportações.',
      ],
      initialVersion: 'Orçamento + lançamentos + centros de custos + indicadores essenciais, em produto independente.',
      businessModelTitle: 'Modelo de negócio',
      businessModel: 'Assinatura mensal por plataforma-base, complementada por módulos, usuários ou unidades.',
      caution:
        'A experiência anterior pode orientar o conceito, mas a Aegon deve validar a titularidade e não reutilizar código, dados ou ativos de terceiros sem autorização.',
    },
    {
      id: 'compras',
      code: 'Projeto 3.3',
      category: 'Compras inteligentes',
      proponent: 'Proponente: Adilson',
      title: 'Assistente de Compras',
      summary: 'Uma experiência de compras mais inteligente, conectando preços locais e decisões de consumo.',
      icon: ShoppingCart,
      visualBg: '#f1eee6',
      slideHref: '#/9',
      problemAndProposal:
        'Comprar com economia exige comparar preços, ofertas, marcas, distâncias e hábitos. O assistente busca simplificar essa tomada de decisão.',
      featuresTitle: 'Funcionalidades idealizadas',
      features: [
        'Lista de compras com frequência semanal, quinzenal ou mensal.',
        'Raio de busca, marcas preferidas e requisitos por produto.',
        'Pesquisa de preços em fontes disponíveis de supermercados da região.',
        'Comparação por custo total da lista, histórico de gastos e consumo.',
        'Indicadores dos produtos com maior impacto no orçamento.',
      ],
      initialVersion: 'Uma cidade, uma cesta padronizada e poucos mercados com preços verificáveis. Primeiro provar a utilidade e confiabilidade das informações.',
      businessModelTitle: 'Possíveis receitas',
      businessModel: 'Plano premium para usuários, ferramentas comerciais para supermercados e indicações remuneradas com transparência.',
      caution: 'Variação de preços, fontes indisponíveis, promoções condicionadas e atualização dos catálogos são riscos centrais.',
    },
    {
      id: 'youtube',
      code: 'Projeto 3.4',
      category: 'Mídia e marca',
      proponent: 'Proponente: Gabriel',
      title: 'Canal no YouTube',
      summary: 'Uma proposta criativa para ampliar a presença da Aegon, compartilhar conhecimento e abrir conversas comerciais.',
      icon: PlaySquare,
      visualBg: '#e6edf0',
      slideHref: '#/10',
      problemAndProposal:
        'Ampliar o alcance orgânico da marca Aegon, demonstrar repertório em design, tecnologia e negócios e criar um canal proprietário de atração comercial.',
      featuresTitle: 'Pontos para Gabriel apresentar',
      features: [
        'Conceito e temática do canal.',
        'Público-alvo e diferenciais de conteúdo.',
        'Formato, produção, edição e frequência.',
        'Relação com a marca Aegon ou projeto independente.',
        'Custos, dedicação necessária e próximos testes.',
      ],
      initialVersion: 'Definir linha editorial e produzir um episódio piloto antes de estabelecer uma agenda de publicação.',
      businessModelTitle: 'Possibilidades de retorno',
      businessModel: 'Autoridade de marca, aquisição de clientes, patrocínios e monetização de conteúdo — hipóteses a validar, não receitas garantidas.',
    },
  ],
  closingNote: 'entender as propostas e selecionar quais avançam para análise aprofundada; não é necessário começar todas ao mesmo tempo.',
};
