import type { CtaData } from '../components/layouts/CtaLayout';
import type { SlideMeta } from '../types/slide';
import { prints } from './prints';
import { S_ENCERRAMENTO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-16',
  title: 'Encerramento · Qual Aegon queremos construir?',
  section: S_ENCERRAMENTO,
  theme: 'dark',
  bare: true,
  shapes: 'a',
  notes: 'Encerramento da reunião estratégica: alinhar a visão de 6 meses da Aegon e exportar o plano de ação consolidado.',
};

export const data: CtaData = {
  eyebrow: 'Para encerrar a conversa',
  titleA: 'Qual Aegon queremos',
  titleB: 'construir?',
  text: 'Daqui a seis meses, quais resultados, clientes e projetos precisaremos ter conquistado para dizer que a retomada valeu a pena?',
  cta: { label: 'Abrir site atual', url: 'https://aegon-com-88qe.vercel.app/' },
  address: 'aegon-com-88qe.vercel.app',
  screen: prints.aegonSite,
};
