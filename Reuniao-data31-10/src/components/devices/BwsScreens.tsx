/**
 * Telas de EXEMPLO recriadas em código com a identidade visual AEGON v3.
 * Servem de visualização padrão nos mockups (Laptop/Tablet) até que um print
 * personalizado seja enviado na PrintSlot durante o Modo Edição.
 */
import {
  Activity, ArrowUpRight, BarChart3, Bell, Briefcase, CheckCircle2, HeartHandshake,
  LayoutGrid, Layers, Mic, Play, PlaySquare, ShieldCheck, ShoppingCart, Sparkles, TrendingUp, Users, Wallet,
} from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { ScaledScreen } from './ScaledScreen';
import { ExpandButton } from '../ui/ExpandImage';
import { useSlideState } from '../../hooks/useSlideState';

export type ScreenKey =
  | 'pauta-estrategica'
  | 'projeto-andresa'
  | 'gestao-financeira'
  | 'assistente-compras'
  | 'canal-youtube'
  | 'site-institucional'
  | 'consultoria-pme'
  | 'inicio' | 'sessoes' | 'alerta' | 'sucesso' | 'sem-acesso' | 'sem-info' | 'chamado-modal'
  | 'email' | 'caixa-help' | 'novo-chamado' | 'acompanhamento' | 'avaliacao' | 'app';

const c = {
  chrome: '#052C72',
  primary: '#063A96',
  action: '#1250BF',
  canvas: '#F8F7F3',
  text: '#10203B',
  muted: '#455573',
  border: '#DEDFE2',
  sel: '#E8EFFF',
  gold: '#E5BD5A',
};

const Bar = ({ w, h = 12, o = 1, color = '#cfdae9' }: { w: number | string; h?: number; o?: number; color?: string }) => (
  <span style={{ display: 'block', width: w, height: h, borderRadius: h, background: color, opacity: o }} />
);

const Badge = ({ tone, children }: { tone: 'ok' | 'alert' | 'danger' | 'info' | 'muted'; children: ReactNode }) => {
  const t = {
    ok: ['#E8EFFF', '#063A96'],
    alert: ['#F8F0DC', '#705D35'],
    danger: ['#FEE2E2', '#B91C1C'],
    info: ['#EDF2FF', '#1250BF'],
    muted: ['#E9E6DE', '#455573'],
  }[tone];
  return (
    <span style={{ background: t[0], color: t[1], borderRadius: 999, padding: '6px 14px', fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' }}>
      {children}
    </span>
  );
};

const Card = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{ background: '#fff', border: `1px solid ${c.border}`, borderRadius: 18, boxShadow: '0 8px 24px rgba(5,30,80,0.06)', ...style }}>{children}</div>
);

const MENU_W = 86;

function SideMenu({ nav }: { nav: number }) {
  const items = [LayoutGrid, Briefcase, Layers, Wallet, ShoppingCart, PlaySquare];
  return (
    <aside style={{ width: MENU_W, height: '100%', background: c.chrome, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 22, gap: 14, flex: 'none' }}>
      <span style={{ width: 48, height: 48, borderRadius: 999, border: '2.5px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 14, letterSpacing: '-0.08em' }}>on</span>
      {items.map((I, i) => (
        <span key={i} style={{ width: 52, height: 52, borderRadius: 14, display: 'grid', placeItems: 'center', background: i === nav ? 'rgba(255,255,255,0.16)' : 'transparent', color: i === nav ? '#fff' : 'rgba(255,255,255,0.55)' }}>
          <I size={25} strokeWidth={1.8} />
        </span>
      ))}
    </aside>
  );
}

export function MenuStrip({ nav = 0 }: { nav?: number }) {
  return (
    <div style={{ position: 'relative', width: `${(MENU_W / 1280) * 100}%`, flex: 'none', background: c.chrome }}>
      <ScaledScreen baseWidth={MENU_W} baseHeight={800}><SideMenu nav={nav} /></ScaledScreen>
    </div>
  );
}

function Shell({ title, crumb, children, nav = 0, badge = 'AEGON 2026' }: { title: string; crumb: string; children: ReactNode; nav?: number; badge?: string }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', background: c.canvas, color: c.text, fontFamily: 'var(--font-body)' }}>
      <SideMenu nav={nav} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ height: 76, background: '#fff', borderBottom: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', padding: '0 30px', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.action }}>{crumb}</span>
            <span style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-brand)', color: c.chrome, letterSpacing: '-0.03em' }}>{title}</span>
          </div>
          <span style={{ flex: 1 }} />
          <Badge tone="info">{badge}</Badge>
          <Bell size={22} color={c.muted} />
          <span style={{ width: 42, height: 42, borderRadius: 12, background: c.sel, display: 'grid', placeItems: 'center', color: c.primary, fontWeight: 800 }}>A·G·E</span>
        </header>
        <main style={{ flex: 1, padding: 28, minHeight: 0, position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</main>
      </div>
    </div>
  );
}

/** Tela principal da capa: dispositivo hero do site v3 ("ESTRATÉGIA. CRIAÇÃO. TECNOLOGIA.") */
function PautaEstrategicaScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f4f0e9', padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'var(--font-brand)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -40, bottom: -60, fontSize: 340, fontWeight: 800, letterSpacing: '-0.15em', color: 'rgba(5,44,114,0.06)', lineHeight: 0.85, transform: 'rotate(-12deg)' }}>
        on
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 18, letterSpacing: '0.18em', color: c.action, fontWeight: 800, textTransform: 'uppercase' }}>
          PAUTA ESTRATÉGICA · 31.10.26
        </div>
        <Badge tone="ok">Adilson · Gabriel · Emanuel</Badge>
      </div>
      <div style={{ fontSize: 94, lineHeight: 0.96, fontWeight: 800, letterSpacing: '-0.08em', color: c.chrome }}>
        ESTRATÉGIA<span style={{ color: c.action }}>.</span>
        <br />
        CRIAÇÃO<span style={{ color: c.action }}>.</span>
        <br />
        TECNOLOGIA<span style={{ color: c.action }}>.</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, zIndex: 1 }}>
        {[
          ['03 Pilares', 'Estratégia, Criação e Tech'],
          ['04 Propostas', 'Inovação com propósito'],
          ['30 Dias', 'Plano de ação prático'],
        ].map(([k, v]) => (
          <div key={k} style={{ background: '#fff', padding: '18px 22px', borderRadius: 16, border: `1px solid ${c.border}` }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: c.chrome }}>{k}</div>
            <div style={{ fontSize: 16, color: c.muted, marginTop: 4 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <Bar w="46%" h={10} color={c.primary} />
        <Bar w="22%" h={10} />
        <Bar w="22%" h={10} />
      </div>
    </div>
  );
}

/** Tela Projeto 3.1: Projeto Andresa (IA e cuidado) */
function ProjetoAndresaScreen() {
  return (
    <Shell title="Projeto Andresa · Painel do Cuidador" crumb="Projeto 3.1 · IA e Cuidado" nav={2} badge="Validação Inicial">
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 20, flex: 1 }}>
        <Card style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 52, height: 52, borderRadius: 16, background: c.sel, color: c.primary, display: 'grid', placeItems: 'center' }}>
                <HeartHandshake size={28} />
              </span>
              <div>
                <div style={{ fontSize: 21, fontWeight: 800, color: c.chrome }}>Chamada de Voz Assistida</div>
                <div style={{ fontSize: 16, color: c.muted }}>Voz sintética familiar com consentimento autorizado</div>
              </div>
            </div>
            <Badge tone="ok">Ativo hoje · 09h15</Badge>
          </div>
          <div style={{ background: '#F4F7FF', borderRadius: 14, padding: 20, border: '1px solid #D5E2FA' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: c.action, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Resumo pós-conversa para a família</div>
            <p style={{ margin: '10px 0 0', fontSize: 18, lineHeight: 1.5, color: c.text }}>
              Conversa tranquila de 6 minutos. Relatou boa noite de sono, lembrou-se do café da manhã e pediu para ouvir música clássica à tarde.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 'auto' }}>
            <div style={{ padding: 16, borderRadius: 12, background: c.canvas }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: c.muted }}>Padrão de rotina</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: c.chrome, marginTop: 4 }}>Estável · Sem alertas</div>
            </div>
            <div style={{ padding: 16, borderRadius: 12, background: '#F8F0DC' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#705D35' }}>Governança & LGPD</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#705D35', marginTop: 4 }}>Consentimento verificado</div>
            </div>
          </div>
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Card style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 19, fontWeight: 800, color: c.chrome }}>
              <Mic size={22} color={c.action} /> Histórico de Interações
            </div>
            {['09:15 · Diálogo matinal (6 min)', 'Ontem · Lembrete de hidratação', '29/10 · Conversa com voz familiar'].map((item, i) => (
              <div key={item} style={{ padding: '14px 16px', borderRadius: 12, background: i === 0 ? c.sel : c.canvas, fontSize: 17, fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                <span>{item}</span>
                <CheckCircle2 size={20} color={c.primary} />
              </div>
            ))}
          </Card>
          <Card style={{ padding: 20, background: c.chrome, color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17, fontWeight: 700, color: '#DCEAFF' }}>
              <ShieldCheck size={20} /> Supervisão Humana Obrigatória
            </div>
            <div style={{ fontSize: 15, color: '#C8D8F4', marginTop: 6, lineHeight: 1.4 }}>
              Avisos solicitam avaliação do cuidador; não substituem diagnóstico clínico.
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  );
}

/** Tela Projeto 3.2: Gestão Financeira Modular (SaaS B2B) */
function GestaoFinanceiraScreen() {
  return (
    <Shell title="Gestão Financeira Modular" crumb="Projeto 3.2 · SaaS B2B PME" nav={3} badge="Módulos Ativos: 04">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['Orçamento Mensal', 'R$ 84.500', '+12% planejado', 'ok'],
          ['Lançamentos', '142 itens', '98% conciliados', 'info'],
          ['Centros de Custo', '06 ativos', 'Operação & Mkt', 'ok'],
          ['Aprovações', '03 pendentes', 'Compras do mês', 'alert'],
        ].map(([label, val, sub, tone]) => (
          <Card key={label} style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: c.muted, textTransform: 'uppercase' }}>{label}</span>
            <span style={{ fontSize: 30, fontWeight: 800, color: c.chrome, fontFamily: 'var(--font-brand)' }}>{val}</span>
            <Badge tone={tone as 'ok' | 'info' | 'alert'}>{sub}</Badge>
          </Card>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20, flex: 1 }}>
        <Card style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: c.chrome }}>Acompanhamento Orçamentário por Centro de Custo</span>
            <BarChart3 size={22} color={c.action} />
          </div>
          {[
            ['Operações & Entrega', 78, '#063A96'],
            ['Marketing & Comercial', 62, '#1250BF'],
            ['Tecnologia & Infraestrutura', 48, '#2563EB'],
            ['Administrativo', 35, '#64748B'],
          ].map(([name, pct, col]) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700 }}>
                <span>{name}</span>
                <span>{pct}% utilizado</span>
              </div>
              <div style={{ height: 12, borderRadius: 99, background: '#E7ECF7', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: col as string, borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: c.chrome }}>Módulos Contratáveis</span>
          {[
            ['Orçamento & Metas', true],
            ['Receitas & Despesas', true],
            ['Centros de Custo', true],
            ['Indicadores Essenciais', true],
            ['Estoque & Compras (Add-on)', false],
          ].map(([mod, on]) => (
            <div key={mod as string} style={{ padding: '12px 14px', borderRadius: 12, background: on ? c.sel : c.canvas, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 16, fontWeight: 700, color: on ? c.chrome : c.muted }}>
              <span>{mod as string}</span>
              <Badge tone={on ? 'ok' : 'muted'}>{on ? 'Ativo' : 'Opcional'}</Badge>
            </div>
          ))}
        </Card>
      </div>
    </Shell>
  );
}

/** Tela Projeto 3.3: Assistente de Compras */
function AssistenteComprasScreen() {
  return (
    <Shell title="Assistente Inteligente de Compras" crumb="Projeto 3.3 · Economia Local" nav={4} badge="Raio: 5 km · Cesta Padrão">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20, flex: 1 }}>
        <Card style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 21, fontWeight: 800, color: c.chrome }}>Comparativo de Custo Total da Lista (Mensal)</span>
            <Badge tone="ok">Economia: R$ 148,90</Badge>
          </div>
          {[
            ['Mercado A · 1,8 km', 'R$ 612,40', 'Menor custo total · 100% dos itens', true],
            ['Supermercado B · 3,2 km', 'R$ 689,00', 'Ofertas em limpeza, cesta +12%', false],
            ['Atacadista C · 4,7 km', 'R$ 761,30', 'Distância maior · 2 marcas alternativas', false],
          ].map(([mkt, price, note, best]) => (
            <div key={mkt as string} style={{ padding: 18, borderRadius: 14, border: best ? `2px solid ${c.action}` : `1px solid ${c.border}`, background: best ? c.sel : '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 19, fontWeight: 800, color: c.chrome }}>{mkt as string}</div>
                <div style={{ fontSize: 15, color: c.muted, marginTop: 4 }}>{note as string}</div>
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: best ? c.action : c.text, fontFamily: 'var(--font-brand)' }}>{price as string}</div>
            </div>
          ))}
        </Card>
        <Card style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: c.chrome }}>Maior Impacto no Orçamento</span>
          {[
            ['Azeite Extra Virgem 500ml', 'Variação de 34% na região'],
            ['Café Torrado e Moído 500g', 'Em alta · sugerir compra quinzenal'],
            ['Leite Integral (Caixa 12 un.)', 'Oferta verificada a 1,8 km'],
          ].map(([prod, tip]) => (
            <div key={prod} style={{ padding: 16, borderRadius: 12, background: c.canvas, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: c.chrome }}>{prod}</span>
              <span style={{ fontSize: 15, color: c.action, fontWeight: 600 }}>{tip}</span>
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: 16, borderRadius: 12, background: '#052C72', color: '#fff', display: 'flex', alignItems: 'center', gap: 12 }}>
            <TrendingUp size={24} color={c.gold} />
            <span style={{ fontSize: 16, fontWeight: 600 }}>MVP: 1 cidade, cesta padronizada e preços verificáveis.</span>
          </div>
        </Card>
      </div>
    </Shell>
  );
}

/** Tela Projeto 3.4: Canal no YouTube */
function CanalYoutubeScreen() {
  return (
    <Shell title="Canal AEGON · Mídia, Conteúdo e Autoridade" crumb="Projeto 3.4 · Proponente: Gabriel" nav={5} badge="Episódio Piloto">
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20, flex: 1 }}>
        <Card style={{ padding: 24, background: 'linear-gradient(135deg, #042565, #073e99)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#DCEAFF' }}>LINHA EDITORIAL AEGON</span>
            <span style={{ width: 52, height: 52, borderRadius: '50%', background: '#fff', color: c.chrome, display: 'grid', placeItems: 'center' }}>
              <Play size={26} fill={c.chrome} />
            </span>
          </div>
          <div>
            <div style={{ fontSize: 42, fontWeight: 800, fontFamily: 'var(--font-brand)', lineHeight: 1.08, letterSpacing: '-0.04em' }}>
              Tecnologia, Design e Negócios Reais na Prática.
            </div>
            <p style={{ fontSize: 18, color: '#DCEAFF', marginTop: 14, lineHeight: 1.5 }}>
              Bastidores de projetos, decisões de produto e soluções digitais que aproximam clientes e fortalecem a marca Aegon.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Badge tone="ok">Autoridade de Marca</Badge>
            <Badge tone="info">Geração de Leads B2B</Badge>
          </div>
        </Card>
        <Card style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: c.chrome }}>Roteiro de Validação</span>
          {[
            ['01. Conceito & Temática', 'Recorte editorial e público-alvo'],
            ['02. Formato & Produção', 'Captação, edição e frequência sustentável'],
            ['03. Marca Aegon', 'Conexão com portfólio e vendas'],
            ['04. Episódio Piloto', 'Testar produção antes de agenda fixa'],
          ].map(([step, desc]) => (
            <div key={step} style={{ padding: '14px 16px', borderRadius: 12, background: c.canvas }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: c.chrome }}>{step}</div>
              <div style={{ fontSize: 15, color: c.muted, marginTop: 2 }}>{desc}</div>
            </div>
          ))}
        </Card>
      </div>
    </Shell>
  );
}

/** Tela Consultoria PME / Site Institucional */
function SiteInstitucionalScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #042565, #073e99 65%, #07317b)', color: '#fff', padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img
          src={`${import.meta.env.BASE_URL}brand/logo-branco.png`}
          alt="AEGON"
          style={{ height: 42, width: 'auto', objectFit: 'contain', display: 'block' }}
        />
        <div style={{ display: 'flex', gap: 22, fontSize: 17, fontWeight: 600, color: '#DCEAFF', alignItems: 'center' }}>
          <span>Serviços</span>
          <span>Consultoria PME</span>
          <span>Produtos</span>
          <span style={{ background: '#fff', color: c.chrome, padding: '10px 20px', borderRadius: 999, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Falar com a Aegon <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
      <div style={{ maxWidth: 820 }}>
        <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#BFD6FF' }}>
          VITRINE COMERCIAL · AEGON-COM-88QE.VERCEL.APP
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, fontFamily: 'var(--font-brand)', lineHeight: 1.02, letterSpacing: '-0.05em', marginTop: 18 }}>
          Soluções digitais sob medida e produtos com propósito humano.
        </div>
        <p style={{ fontSize: 22, color: '#E2EBFC', marginTop: 18, lineHeight: 1.45 }}>
          Estratégia, design e engenharia de software trabalhando juntos para organizar processos, fortalecer marcas e escalar negócios reais.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['01 · Diagnóstico', 'Escuta ativa do negócio'],
          ['02 · Plano de Ação', 'Prioridades claras'],
          ['03 · Implementação', 'Design, web e sistemas'],
          ['04 · Acompanhamento', 'Evolução por indicadores'],
        ].map(([t, s]) => (
          <div key={t} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 16, padding: '18px 20px' }}>
            <div style={{ fontSize: 19, fontWeight: 800 }}>{t}</div>
            <div style={{ fontSize: 15, color: '#DCEAFF', marginTop: 4 }}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsultoriaPmeScreen() {
  return (
    <Shell title="Consultoria para Pequenos Negócios" crumb="Oferta Comercial · Validação" nav={1} badge="Jornada em 4 Etapas">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['01', 'Diagnóstico', 'Presença digital e gargalos operacionais'],
          ['02', 'Plano de ação', 'Melhorias rápidas sem complexidade'],
          ['03', 'Implementação', 'Posicionamento, site e automações'],
          ['04', 'Acompanhamento', 'Revisão de metas e evolução modular'],
        ].map(([n, t, d]) => (
          <Card key={n} style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10, borderTop: `5px solid ${c.action}` }}>
            <span style={{ width: 38, height: 38, borderRadius: '50%', background: c.chrome, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 16 }}>{n}</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: c.chrome }}>{t}</span>
            <span style={{ fontSize: 16, color: c.muted, lineHeight: 1.4 }}>{d}</span>
          </Card>
        ))}
      </div>
      <Card style={{ padding: 28, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#E5ECFB', border: '1px solid #C8D7EF' }}>
        <div style={{ maxWidth: 700 }}>
          <Badge tone="info">Evolução Conectada · Produto Próprio</Badge>
          <div style={{ fontSize: 32, fontWeight: 800, color: c.chrome, fontFamily: 'var(--font-brand)', marginTop: 12 }}>
            Da Consultoria para a Gestão Financeira Modular
          </div>
          <p style={{ fontSize: 18, color: '#334969', marginTop: 8, lineHeight: 1.5 }}>
            Começar pequeno, ouvir o empreendedor e entregar melhorias imediatas — criando base real para ofertar módulos de orçamento, despesas e indicadores.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 280 }}>
          <div style={{ background: '#fff', padding: '16px 20px', borderRadius: 14, fontWeight: 800, color: c.chrome, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Sparkles size={22} color={c.action} /> Ticket acessível de entrada
          </div>
          <div style={{ background: '#fff', padding: '16px 20px', borderRadius: 14, fontWeight: 800, color: c.chrome, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Activity size={22} color={c.action} /> Recorrência e upsell B2B
          </div>
          <div style={{ background: '#fff', padding: '16px 20px', borderRadius: 14, fontWeight: 800, color: c.chrome, display: 'flex', alignItems: 'center', gap: 12 }}>
            <Users size={22} color={c.action} /> Relacionamento próximo
          </div>
        </div>
      </Card>
    </Shell>
  );
}

const base: Record<ScreenKey, [number, number]> = {
  'pauta-estrategica': [1200, 900],
  'projeto-andresa': [1280, 800],
  'gestao-financeira': [1280, 800],
  'assistente-compras': [1280, 800],
  'canal-youtube': [1280, 800],
  'site-institucional': [1280, 800],
  'consultoria-pme': [1280, 800],
  inicio: [1200, 900],
  sessoes: [1200, 900],
  alerta: [1200, 900],
  sucesso: [1200, 900],
  'sem-acesso': [1200, 900],
  'sem-info': [1200, 900],
  'chamado-modal': [1200, 900],
  email: [1280, 800],
  'caixa-help': [1280, 800],
  'novo-chamado': [1280, 800],
  acompanhamento: [1280, 800],
  avaliacao: [1280, 800],
  app: [430, 880],
};

/** Tela de exemplo por chave, já escalada para o container. */
export function BwsScreen({ screen, emailSubject, emailBody, emailBodyFull }: { screen: ScreenKey; emailSubject?: string; emailBody?: string; emailBodyFull?: string }) {
  const { print } = useSlideState();
  const [w, h] = base[screen] ?? [1280, 800];
  if (emailBody) {
    return (
      <ScaledScreen baseWidth={w} baseHeight={h}>
        <div style={{ position: 'relative', width: w, height: h, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }}>
          {!print && <ExpandButton src={`${import.meta.env.BASE_URL}${emailBodyFull ?? emailBody}`} alt={emailSubject ?? ''} size={64} style={{ top: 20, right: 20 }} />}
          <img src={`${import.meta.env.BASE_URL}${emailBody}`} alt={emailSubject ?? ''} style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain' }} />
        </div>
      </ScaledScreen>
    );
  }
  const content = (() => {
    switch (screen) {
      case 'pauta-estrategica':
      case 'inicio':
        return <PautaEstrategicaScreen />;
      case 'projeto-andresa':
      case 'sessoes':
        return <ProjetoAndresaScreen />;
      case 'gestao-financeira':
      case 'caixa-help':
        return <GestaoFinanceiraScreen />;
      case 'assistente-compras':
      case 'alerta':
        return <AssistenteComprasScreen />;
      case 'canal-youtube':
      case 'sucesso':
        return <CanalYoutubeScreen />;
      case 'consultoria-pme':
      case 'novo-chamado':
        return <ConsultoriaPmeScreen />;
      case 'site-institucional':
      default:
        return <SiteInstitucionalScreen />;
    }
  })();
  return (
    <ScaledScreen baseWidth={w} baseHeight={h}>
      <div style={{ position: 'relative', width: w, height: h }}>{content}</div>
    </ScaledScreen>
  );
}
