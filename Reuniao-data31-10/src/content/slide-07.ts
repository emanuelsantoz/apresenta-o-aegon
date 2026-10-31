import { HeartHandshake } from 'lucide-react';
import type { ProjectDetailData } from '../components/layouts/ProjectDetailLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_PROJETOS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-07',
  title: 'Projeto 3.1 · Projeto Andresa (IA e cuidado)',
  section: S_PROJETOS,
  theme: 'light',
  shapes: 'c',
  notes: 'Projeto 3.1 (Proponente: Adilson) — Tecnologia de apoio à comunicação para pessoas com Alzheimer, familiares e cuidadores.',
};

export const data: ProjectDetailData = {
  code: 'Projeto 3.1',
  category: 'IA e cuidado',
  proponent: 'Proponente: Adilson',
  title: 'Projeto Andresa',
  summary: 'Tecnologia de apoio à comunicação, conectando pessoas com Alzheimer, familiares e cuidadores.',
  icon: HeartHandshake,
  problemTitle: 'Problema e proposta',
  problemText:
    'Famílias e cuidadores enfrentam desafios para acompanhar conversas, necessidades e mudanças na rotina de pessoas com Alzheimer, especialmente nos estágios avançados. A proposta é oferecer um canal de comunicação assistida e informações úteis ao cuidador.',
  featuresTitle: 'Funcionalidades idealizadas',
  features: [
    'Chamadas de voz com agente de IA personalizado, com voz sintética de familiar devidamente autorizada.',
    'Transcrição e resumos das conversas para o responsável.',
    'Identificação de possíveis alterações de padrão e avisos que solicitem avaliação humana.',
    'Painel de acompanhamento e histórico acessível ao familiar autorizado.',
  ],
  initialVersionTitle: 'Versão inicial a validar',
  initialVersionText:
    'Chamada assistida, resumo pós-conversa e painel simples, testados com orientação de especialistas e cuidadores.',
  revenueTitle: 'Modelo de negócio',
  revenueText:
    'Assinatura familiar ou contratação por instituições/serviços de cuidado, a validar em pesquisa.',
  caution:
    'Não apresentar detecção de emergência como diagnóstico ou sistema garantido de proteção. Avaliar LGPD, consentimento, transparência sobre a IA, direitos de voz e requisitos clínicos/regulatórios antes de ofertar.',
  screen: prints.projetoAndresa,
};
