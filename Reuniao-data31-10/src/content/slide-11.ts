import { Briefcase, Clock, DollarSign, Search, Settings, Users } from 'lucide-react';
import type { PriorizacaoData } from '../components/layouts/PriorizacaoLayout';
import type { SlideMeta } from '../types/slide';
import { S_PRIORIZACAO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-11',
  title: '04 · Foco é escolher o que faz sentido agora.',
  section: S_PRIORIZACAO,
  theme: 'dark',
  shapes: 'a',
  notes: 'Bloco 04 (20 minutos): preencham juntos a Matriz de Priorização atribuindo notas de 1 a 5 para cada projeto nos 6 critérios.',
};

export const data: PriorizacaoData = {
  eyebrow: '04 · Critério antes de pressa',
  title: ['Foco é escolher', 'o que faz sentido agora.'],
  subtitle:
    'Avaliem os projetos com critérios comuns. O objetivo é escolher uma aposta viável e manter as demais em um portfólio de ideias.',
  timePill: '20 minutos',
  criteria: [
    {
      icon: Search,
      title: 'Demanda real',
      desc: 'Existe um problema importante e um público disposto a usar ou comprar?',
    },
    {
      icon: DollarSign,
      title: 'Potencial de receita',
      desc: 'Como o projeto se sustenta financeiramente?',
    },
    {
      icon: Settings,
      title: 'Viabilidade técnica',
      desc: 'Conseguimos produzir um MVP confiável?',
    },
    {
      icon: Briefcase,
      title: 'Investimento',
      desc: 'Quanto custa iniciar e manter?',
    },
    {
      icon: Users,
      title: 'Equipe disponível',
      desc: 'Temos tempo e competências para executar?',
    },
    {
      icon: Clock,
      title: 'Prazo de validação',
      desc: 'Quando conseguiremos aprender com usuários reais?',
    },
  ],
  matrixHelper:
    'Atribuam notas de 1 (desfavorável) a 5 (muito favorável). A pontuação é apenas apoio à discussão; riscos críticos podem impedir um projeto mesmo com nota alta.',
  closingNote: 'uma prioridade clara, hipóteses a testar e o próximo passo de cada ideia registrado.',
};
