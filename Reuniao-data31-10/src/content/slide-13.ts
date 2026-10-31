import type { ParceriasData } from '../components/layouts/ParceriasLayout';
import type { SlideMeta } from '../types/slide';
import { S_PARCERIAS } from './sections';

export const meta: SlideMeta = {
  id: 'slide-13',
  title: '06 · Conexões que fazem o negócio avançar.',
  section: S_PARCERIAS,
  theme: 'dark',
  shapes: 'a',
  notes: 'Bloco 06 (15 minutos): mapear aproximação com os 4 parceiros em prospecção e selecionar pelo menos 3 eventos estratégicos regionais.',
};

export const data: ParceriasData = {
  eyebrow: '06 · Construir relações, abrir portas',
  title: ['Conexões que fazem', 'o negócio avançar.'],
  subtitle:
    'Mais do que participar de eventos, queremos estar nos lugares certos, conversar com pessoas relevantes e voltar com oportunidades concretas para a Aegon.',
  timePill: '15 minutos',
  leftLabel: 'PARCERIAS EM PROSPECÇÃO',
  leftTitle: 'Relacionamentos com intenção.',
  leftDescription:
    'Os contatos abaixo são oportunidades para explorar, não parcerias fechadas. Definir para cada um: sinergia, proposta, responsável e data para aproximação.',
  partners: [
    { name: 'Samuel Gigliotti', tag: 'sinergias possíveis' },
    { name: 'Lucas e Samuel', tag: 'colaboração' },
    { name: 'Pietro e Fábio', tag: 'competências' },
    { name: 'Gabriel Vizon', tag: 'aproximação' },
  ],
  partnerQuestionTitle: 'Para discutir',
  partnerQuestionText: 'Que valor podemos construir juntos? Qual seria o primeiro contato ou projeto-piloto?',
  rightLabel: 'AGENDA ESTRATÉGICA · FOCO REGIONAL',
  rightTitle: 'Escolher três boas oportunidades.',
  rightDescription:
    'Priorizar Bauru, Jaú e Botucatu. Eventos mais distantes entram como oportunidades específicas, não como compromisso automático.',
  connectionNote:
    'Para cada escolha: quem participa, por que ir, quanto pode custar e o que a Aegon espera trazer de volta. Consultar as páginas oficiais antes de reservar deslocamentos ou ingressos.',
};
