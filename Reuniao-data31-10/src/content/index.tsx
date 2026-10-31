/**
 * Registro dos slides da Reunião Estratégica AEGON v3 (31/10/2026).
 * Ordem desta lista = ordem da apresentação.
 */
import type { SlideDef } from '../types/slide';
import { CoverLayout } from '../components/layouts/CoverLayout';
import { AgendaLayout } from '../components/layouts/AgendaLayout';
import { RetomadaLayout } from '../components/layouts/RetomadaLayout';
import { DirecionamentoLayout } from '../components/layouts/DirecionamentoLayout';
import { ConsultoriaLayout } from '../components/layouts/ConsultoriaLayout';
import { ProjectsOverviewLayout } from '../components/layouts/ProjectsOverviewLayout';
import { ProjectDetailLayout } from '../components/layouts/ProjectDetailLayout';
import { PriorizacaoLayout } from '../components/layouts/PriorizacaoLayout';
import { IdentidadeLayout } from '../components/layouts/IdentidadeLayout';
import { ParceriasLayout } from '../components/layouts/ParceriasLayout';
import { OperacaoLayout } from '../components/layouts/OperacaoLayout';
import { PlanoAcaoLayout } from '../components/layouts/PlanoAcaoLayout';
import { CtaLayout } from '../components/layouts/CtaLayout';

import * as s01 from './slide-01';
import * as s02 from './slide-02';
import * as s03 from './slide-03';
import * as s04 from './slide-04';
import * as s05 from './slide-05';
import * as s06 from './slide-06';
import * as s07 from './slide-07';
import * as s08 from './slide-08';
import * as s09 from './slide-09';
import * as s10 from './slide-10';
import * as s11 from './slide-11';
import * as s12 from './slide-12';
import * as s13 from './slide-13';
import * as s14 from './slide-14';
import * as s15 from './slide-15';
import * as s16 from './slide-16';

export const slides: SlideDef[] = [
  { ...s01.meta, Component: () => <CoverLayout d={s01.data} /> },
  { ...s02.meta, Component: () => <AgendaLayout d={s02.data} /> },
  { ...s03.meta, Component: () => <RetomadaLayout d={s03.data} /> },
  { ...s04.meta, Component: () => <DirecionamentoLayout d={s04.data} /> },
  { ...s05.meta, Component: () => <ConsultoriaLayout d={s05.data} /> },
  { ...s06.meta, Component: () => <ProjectsOverviewLayout d={s06.data} /> },
  { ...s07.meta, Component: () => <ProjectDetailLayout d={s07.data} /> },
  { ...s08.meta, Component: () => <ProjectDetailLayout d={s08.data} /> },
  { ...s09.meta, Component: () => <ProjectDetailLayout d={s09.data} /> },
  { ...s10.meta, Component: () => <ProjectDetailLayout d={s10.data} /> },
  { ...s11.meta, Component: () => <PriorizacaoLayout d={s11.data} /> },
  { ...s12.meta, Component: () => <IdentidadeLayout d={s12.data} /> },
  { ...s13.meta, Component: () => <ParceriasLayout d={s13.data} /> },
  { ...s14.meta, Component: () => <OperacaoLayout d={s14.data} /> },
  { ...s15.meta, Component: () => <PlanoAcaoLayout d={s15.data} /> },
  { ...s16.meta, Component: () => <CtaLayout d={s16.data} /> },
];
