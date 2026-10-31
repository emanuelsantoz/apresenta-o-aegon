import {
  Briefcase,
  CheckSquare,
  Compass,
  Handshake,
  Layers,
  Lightbulb,
  Palette,
  Users,
} from 'lucide-react';
import type { AgendaData } from '../components/layouts/AgendaLayout';
import type { SlideMeta } from '../types/slide';
import { S_ABERTURA } from './sections';

export const meta: SlideMeta = {
  id: 'slide-02',
  title: 'Pauta da Reunião Estratégica',
  section: S_ABERTURA,
  theme: 'light',
  chromeOnDark: true,
  notes: 'Visão geral dos 8 blocos da pauta estratégica. Clique em qualquer card para ir direto à seção correspondente.',
};

export const data: AgendaData = {
  eyebrow: 'Panorama da Reunião · 31.10.2026',
  title: 'Pauta Estratégica',
  side: 'Oito etapas conectadas para alinhar visão entre sócios, validar ofertas comerciais, priorizar projetos de inovação e definir compromissos reais para os próximos 30 dias.',
  totalTime: '2h30 sugeridas · 8 blocos',
  items: [
    {
      n: '01',
      icon: Users,
      title: 'Retomada e Direção',
      time: '10 min',
      text: 'Reconectar expectativas, disponibilidade realista e acordos entre Adilson, Gabriel e Emanuel.',
      slideHref: '#/3',
    },
    {
      n: '02',
      icon: Briefcase,
      title: 'Soluções e Consultoria',
      time: '15 min',
      text: 'Serviços sob medida, produtos próprios e validação da Consultoria para Pequenos Negócios.',
      slideHref: '#/4',
    },
    {
      n: '03',
      icon: Lightbulb,
      title: 'Quatro Ideias Reais',
      time: '45 min',
      text: 'Projeto Andresa, Gestão Financeira Modular, Assistente de Compras e Canal no YouTube.',
      slideHref: '#/6',
    },
    {
      n: '04',
      icon: Compass,
      title: 'Critérios e Priorização',
      time: '20 min',
      text: 'Matriz interativa com 6 critérios objetivos para escolher qual aposta avança primeiro.',
      slideHref: '#/11',
    },
    {
      n: '05',
      icon: Palette,
      title: 'Identidade e Marca',
      time: '20 min',
      text: 'Camisetas, cadernos, evolução do site institucional em produção e presença nas redes.',
      slideHref: '#/12',
    },
    {
      n: '06',
      icon: Handshake,
      title: 'Parcerias e Eventos',
      time: '15 min',
      text: 'Prospecção de parceiros estratégicos e seleção de 3 eventos com foco em Bauru, Jaú e Botucatu.',
      slideHref: '#/13',
    },
    {
      n: '07',
      icon: Layers,
      title: 'Operação entre Sócios',
      time: '15 min',
      text: 'Competências distintas (Estratégia, Criação e Tecnologia), entregas e governança conjunta.',
      slideHref: '#/14',
    },
    {
      n: '08',
      icon: CheckSquare,
      title: 'Plano de Ação 30 Dias',
      time: '10 min',
      text: 'Checklist interativo com responsáveis, prazos e exportação imediata do plano da reunião.',
      slideHref: '#/15',
    },
  ],
};
