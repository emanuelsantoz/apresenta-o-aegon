import { ChevronLeft, ChevronRight, Eye, LayoutGrid, Maximize, Pencil, Printer, StickyNote } from 'lucide-react';
import { motion } from 'motion/react';
import { ShareLink } from '../../edit/ShareLink';

interface Props {
  index: number; total: number; step: number; steps: number; idle: boolean;
  prev: () => void; next: () => void; overview: () => void; notes: () => void;
  editing: boolean; locked: boolean; toggleEdit: () => void; slideNumber: number;
}

/** Barra de progresso AEGON + controles discretos (somem após 2 s sem mouse). */
export function Hud({ index, total, step, steps, idle, prev, next, overview, notes, editing, locked, toggleEdit, slideNumber }: Props) {
  const progress = (index + (steps ? step / (steps + 1) : 0) + 1) / total;
  const btn = { all: 'unset', cursor: 'pointer', width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 999, color: '#fff' } as const;
  return (
    <div className="no-print" data-editor-ui>
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, height: 5, background: 'rgba(255,255,255,0.16)', zIndex: 40 }}>
        <motion.div style={{ height: '100%', background: 'var(--gold)', originX: 0 }} animate={{ scaleX: progress }} transition={{ duration: 0.4 }} />
      </div>
      <div style={{
        position: 'fixed', right: 18, top: editing ? 'auto' : 16, bottom: editing ? 16 : 'auto', zIndex: 66, display: 'flex', gap: 4, padding: '5px 8px', borderRadius: 999,
        background: 'rgba(5,44,114,0.94)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(14px)', boxShadow: '0 10px 35px rgba(0,0,0,0.28)',
        opacity: idle && !editing ? 0 : 1, transition: 'opacity .4s',
      }}>
        {!locked && <ShareLink slideNumber={slideNumber} dark={false} up={editing} />}
        {!locked && <button
          style={{ ...btn, width: 'auto', padding: '0 14px', gap: 6, display: 'inline-flex', alignItems: 'center', fontSize: 13, fontWeight: 700, background: editing ? 'var(--ws-selection)' : '#fff', color: 'var(--navy)' }}
          onClick={toggleEdit}
          title="Alternar modo edição / apresentação (E)"
        >
          {editing ? <><Eye size={16} /> Apresentar</> : <><Pencil size={16} /> Editar</>}
        </button>}
        <button style={btn} onClick={prev} title="Anterior (←)"><ChevronLeft size={20} /></button>
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700, alignSelf: 'center', padding: '0 8px', fontVariantNumeric: 'tabular-nums' }}>{index + 1} / {total}</span>
        <button style={btn} onClick={next} title="Próximo (→)"><ChevronRight size={20} /></button>
        <button style={btn} onClick={overview} title="Visão geral dos slides (O)"><LayoutGrid size={18} /></button>
        {!locked && <button style={btn} onClick={notes} title="Notas da pauta (N)"><StickyNote size={18} /></button>}
        <button style={btn} onClick={() => window.open('?print=1', '_blank')} title="Versão de impressão / PDF"><Printer size={18} /></button>
        <button style={btn} onClick={() => document.documentElement.requestFullscreen?.()} title="Tela cheia (F)"><Maximize size={18} /></button>
      </div>
    </div>
  );
}
