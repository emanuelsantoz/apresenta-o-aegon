import { BookOpen, Monitor, Shirt, Smartphone } from 'lucide-react';
import type { IdentidadeData } from '../components/layouts/IdentidadeLayout';
import type { SlideMeta } from '../types/slide';
import { S_IDENTIDADE } from './sections';

export const meta: SlideMeta = {
  id: 'slide-12',
  title: '05 · Uma marca que se reconhece. Uma entrega que se comprova.',
  section: S_IDENTIDADE,
  theme: 'light',
  shapes: 'b',
  notes: 'Bloco 05 (20 minutos): alinhar materiais físicos (camisetas e cadernos), evolução do site institucional em produção e presença nas redes sociais.',
};

export const data: IdentidadeData = {
  eyebrow: '05 · Nossa marca, nosso compromisso',
  title: ['Uma marca que se reconhece.', 'Uma entrega que se comprova.'],
  subtitle:
    'Nossa identidade já tem força. O próximo passo é fazer cada material, canal e apresentação refletir o mesmo cuidado que colocamos no desenvolvimento das soluções.',
  timePill: '20 minutos',
  cards: [
    {
      icon: Shirt,
      visualBg: '#ecf0f8',
      tag: 'Identidade física',
      title: 'Camisetas',
      description: 'Decidir modelo, cor, tecido e aplicação da identidade; comparar orçamento, qualidade e quantidade.',
    },
    {
      icon: BookOpen,
      visualBg: '#e9e8e4',
      tag: 'Material institucional',
      title: 'Cadernos',
      description: 'Escolher formato e acabamento, avaliar o uso institucional e levantar cotações comparáveis.',
    },
    {
      icon: Monitor,
      visualBg: '#e0e8f3',
      tag: 'Vitrine comercial',
      title: 'Site institucional',
      description: 'Evoluir o site atual com oferta clara, portfólio confiável e caminho simples para contato comercial.',
    },
    {
      icon: Smartphone,
      visualBg: '#e9e7f0',
      tag: 'Conteúdo e presença',
      title: 'Redes sociais',
      description: 'Definir canais que façam sentido, pauta editorial, frequência sustentável e responsáveis.',
    },
  ],
  noteStrong: 'Importante:',
  noteText:
    'a Aegon já tem um site em produção. Nosso próximo passo é fazer dele uma vitrine de valor e uma ferramenta de relacionamento comercial.',
  siteUrl: 'https://aegon-com-88qe.vercel.app/',
  siteLabel: 'Abrir site atual',
};
