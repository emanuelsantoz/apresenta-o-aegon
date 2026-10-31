import { ImageUp, RotateCcw } from 'lucide-react';
import { useRef, useState, type CSSProperties, type DragEvent } from 'react';
import { usePrint } from '../../hooks/usePrint';
import { useSlideState } from '../../hooks/useSlideState';
import { useEditMode } from '../../edit/EditMode';

/**
 * Logotipo AEGON (aeg[on]) — clicável para trocar no MODO EDIÇÃO.
 *
 * Por padrão exibe a identidade tipográfica oficial da Aegon ("aeg" + pílula "on").
 * No modo edição, clique na logo (ou arraste uma imagem sobre ela) e escolha um PNG/SVG:
 * a troca vale para TODOS os slides com o mesmo tipo de fundo e fica salva neste navegador.
 */
const variants = {
  dark: {
    id: 'aegon-logo-escuro',
    files: ['brand/logo-branco.png', 'brand/logo.png', 'brand/logo-branco.svg'],
    defaultFile: 'brand/logo-branco.png',
    label: 'fundo escuro',
  },
  light: {
    id: 'aegon-logo-claro',
    files: ['brand/logo-azul.png', 'brand/logo.png', 'brand/logo-azul.svg'],
    defaultFile: 'brand/logo-azul.png',
    label: 'fundo claro',
  },
};

export function BrandMark({ dark, height = 46 }: { dark?: boolean; height?: number }) {
  const { print } = useSlideState();
  const { editing } = useEditMode();
  const mine = dark ? variants.dark : variants.light;
  const other = dark ? variants.light : variants.dark;
  const own = usePrint(mine.id, mine.files);
  const alt = usePrint(other.id, other.files);
  const input = useRef<HTMLInputElement>(null);
  const [hover, setHover] = useState(false);
  const [drag, setDrag] = useState(false);

  const src = own.src ?? alt.src ?? `${import.meta.env.BASE_URL}${mine.defaultFile}`;

  const mark = (
    <img
      src={src}
      alt="AEGON"
      style={{ height, maxWidth: height * 7, objectFit: 'contain', display: 'block' }}
    />
  );

  if (print || !editing) return <span data-no-edit style={wrapStyle}>{mark}</span>;

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith('image/')) void own.save(f);
  };

  const ring = hover || drag;
  return (
    <span
      data-no-edit
      style={{ ...wrapStyle, position: 'relative' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); input.current?.click(); }}
        title={`Clique para trocar a logo (${mine.label}) — PNG ou SVG`}
        style={{
          all: 'unset', cursor: 'pointer', display: 'inline-flex', padding: 8, margin: -8, borderRadius: 12,
          outline: ring ? '2px dashed var(--ws-action)' : '2px dashed transparent',
          background: drag ? 'rgba(18,80,191,0.14)' : 'transparent', transition: 'outline-color .2s',
        }}
      >
        {mark}
      </button>

      {ring && (
        <span className="no-print" style={{ ...tip, color: '#fff', background: 'var(--ws-action)' }}>
          <ImageUp size={16} /> {drag ? 'Solte a imagem' : 'Trocar logo'}
          {own.source === 'upload' && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); void own.remove(); }}
              title="Voltar para a logo padrão"
              style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', marginLeft: 6, opacity: 0.8 }}
            >
              <RotateCcw size={16} />
            </button>
          )}
        </span>
      )}

      <input
        ref={input}
        type="file"
        accept="image/png,image/svg+xml,image/webp,image/jpeg"
        hidden
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => { const f = e.target.files?.[0]; if (f) void own.save(f); e.target.value = ''; }}
      />
    </span>
  );
}

const wrapStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
};

const tip: CSSProperties = {
  position: 'absolute', left: 0, top: '100%', marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6,
  padding: '6px 12px', borderRadius: 8, fontSize: 16, fontWeight: 600, whiteSpace: 'nowrap', zIndex: 30,
  boxShadow: '0 8px 20px -8px rgba(0,0,0,.4)',
};
