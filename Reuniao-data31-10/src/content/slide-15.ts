import type { PlanoAcaoData } from '../components/layouts/PlanoAcaoLayout';
import type { SlideMeta } from '../types/slide';
import { S_PLANO } from './sections';

export const meta: SlideMeta = {
  id: 'slide-15',
  title: '08 · Menos planos soltos. Mais evolução concreta.',
  section: S_PLANO,
  theme: 'aurora',
  shapes: 'b',
  notes: 'Bloco 08 (10 minutos): preencham responsáveis e prazos para as 8 ações e usem "Copiar plano de ação" para compartilhar com todos os sócios.',
};

export const data: PlanoAcaoData = {
  eyebrow: '08 · Compromissos que movem',
  title: ['Menos planos soltos.', 'Mais evolução concreta.'],
  subtitle:
    'Registrem decisões, responsáveis e prazos. O importante não é sair com uma lista enorme, mas com ações que realmente possam avançar.',
  timePill: '10 minutos',
  planNote: 'Checklist e campos são armazenados localmente. Para compartilhar os resultados entre os sócios, use “Copiar plano de ação”.',
};
