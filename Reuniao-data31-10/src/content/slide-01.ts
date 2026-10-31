import type { CoverData } from '../components/layouts/CoverLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_ABERTURA } from './sections';

export const meta: SlideMeta = {
  id: 'slide-01',
  title: 'Capa · Um novo capítulo. Juntos, on.',
  section: S_ABERTURA,
  theme: 'dark',
  bare: true,
  shapes: 'a',
  notes: 'Abertura da reunião estratégica da Aegon (31/10/2026) com Adilson, Gabriel e Emanuel. Tempo total sugerido: 2h30.',
};

export const data: CoverData = {
  eyebrow: 'AEGON · Estratégia em movimento · 2026',
  titleLine1: 'Um novo',
  titleEm: 'capítulo.',
  titleLine3: 'Juntos,',
  subtitle: 'Estratégia, criatividade e tecnologia para transformar desafios reais em soluções digitais com propósito humano.',
  date: '31 de outubro de 2026',
  team: 'Adilson · Gabriel · Emanuel',
  duration: '2h30 de encontro (sugeridas)',
  metrics: [
    { value: '03', label: 'pilares que se complementam' },
    { value: '04', label: 'propostas de inovação em análise' },
    { value: '30', label: 'dias para tirar planos do papel' },
  ],
  laptop: prints.aegonSite,
  tablet: prints.aegonPauta,
};
