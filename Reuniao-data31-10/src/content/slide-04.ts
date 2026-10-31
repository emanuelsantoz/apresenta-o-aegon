import { Briefcase, Box } from 'lucide-react';
import type { DirecionamentoData } from '../components/layouts/DirecionamentoLayout';
import type { SlideMeta } from '../types/slide';
import { S_POSICIONAMENTO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-04',
  title: '02 · O que a Aegon entrega ao mercado?',
  section: S_POSICIONAMENTO,
  theme: 'dark',
  shapes: 'a',
  notes: 'Bloco 02 (15 minutos): alinhar posicionamento entre Frente 01 (Serviços e consultoria) e Frente 02 (Produtos próprios escaláveis).',
};

export const data: DirecionamentoData = {
  eyebrow: '02 · Posicionamento e modelo de negócio',
  title: ['O que a Aegon entrega', 'ao mercado?'],
  subtitle:
    'Nosso DNA combina estratégia, criação e tecnologia com olhar humano. Precisamos transformar essa identidade em propostas de valor objetivas, vendáveis e sustentáveis.',
  timePill: '15 minutos',
  cards: [
    {
      icon: Briefcase,
      kicker: 'Frente 01 · Serviços e consultoria',
      title: 'Soluções sob medida para negócios reais',
      description:
        'Diagnóstico, posicionamento, design, presença digital, sites e sistemas. Entregas definidas a partir dos desafios de cada cliente — do planejamento à implementação.',
      bullets: ['Diagnóstico e Posicionamento', 'Design e Presença Digital', 'Sites e Sistemas Sob Medida'],
    },
    {
      icon: Box,
      kicker: 'Frente 02 · Produtos próprios',
      title: 'Produtos digitais com potencial de escala',
      description:
        'Ferramentas desenvolvidas pela Aegon e aprimoradas com usuários reais, com possibilidades de assinatura, módulos e evolução contínua.',
      light: true,
      bullets: ['Modelo SaaS / Assinatura', 'Evolução por Módulos', 'Validação com Usuários Reais'],
    },
  ],
  decisionText: 'escolher uma oferta inicial, definir para quem venderemos e que problema estamos preparados para resolver primeiro.',
};
