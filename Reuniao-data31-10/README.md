# AEGON — Reunião Estratégica | 31/10/2026

Apresentação interativa em **React + Vite + TypeScript** (palco 1920×1080 escalado automaticamente) unindo a arquitetura do projeto `Apresentacao-jornada` (Modo Edição in-place, Overview de miniaturas, HUD, upload de prints/logos e exportação PDF/HTML único) com a identidade visual, cores, tipografia e funcionalidades interativas do site **AEGON • Próximo ciclo | Reunião estratégica 31.10.2026**.

## Como rodar

```bash
npm install
npm run dev          # abre em http://localhost:5173
```

## Atalhos e Navegação

| Tecla / Ação | Função |
|---|---|
| `→` · `Espaço` · `PgDn` | Próximo passo / slide |
| `←` · `PgUp` | Slide anterior |
| `Home` / `End` | Primeiro / último slide |
| `número` + `Enter` | Ir direto para o slide (ex.: `11` + `Enter`) |
| `O` | Visão geral em grade de miniaturas |
| `E` | Alternar **Modo Edição** / **Modo Apresentação** |
| `N` | Notas da pauta / apresentador |
| `F` | Tela cheia |
| `?print=1` | Visualização empilhada para impressão / salvar em PDF |

## Funcionalidades Interativas Incluídas

- **Identidade Visual AEGON v3**: Paleta oficial (`--navy`, `--blue`, `--electric`, `--ink`, `--paper`, `--sand`, `--gold`), fontes **Manrope** e **DM Sans** e wordmark oficial `aeg[on]`.
- **Pauta Navegável (16 slides)**:
  1. Capa (`#inicio`) com métricas de panorama e mockups interativos
  2. Pauta Estratégica (8 blocos clicáveis)
  3. `01 · Pessoas e direção` — Retomada: Adilson, Gabriel e Emanuel
  4. `02 · Posicionamento e modelo de negócio` — Serviços sob medida e Produtos próprios
  5. `02.2 · Oferta Comercial em Validação` — Consultoria para pequenos negócios + Gestão Financeira Modular
  6. `03 · Inovação com propósito` — Visão geral das 4 propostas com modal expansível ("Explorar projeto +")
  7. `Projeto 3.1` — Projeto Andresa (IA e cuidado)
  8. `Projeto 3.2` — Gestão Financeira Modular (SaaS B2B)
  9. `Projeto 3.3` — Assistente de Compras (Compras inteligentes)
  10. `Projeto 3.4` — Canal no YouTube (Mídia e marca)
  11. `04 · Critério antes de pressa` — 6 critérios + **Matriz de Priorização Interativa** (notas 1–5 com soma automática `/30`)
  12. `05 · Nossa marca, nosso compromisso` — Camisetas, Cadernos, Site institucional (`aegon-com-88qe.vercel.app`) e Redes sociais
  13. `06 · Construir relações, abrir portas` — Parcerias em prospecção + **Checklist de 5 Eventos Regionais** com contador de meta
  14. `07 · Três frentes, uma direção` — Papéis e entregas de Adilson, Gabriel e Emanuel + faixa de governança
  15. `08 · Compromissos que movem` — **Plano de Ação Interativo (30 dias)** com checkboxes, responsáveis, prazos, botão **Copiar plano de ação** e **Imprimir / salvar PDF**
  16. `Encerramento` — Qual Aegon queremos construir?
- **Modo Edição (`Tecla E`)**: Edição direta de qualquer texto, tamanho, peso, cor, marca-texto, criação/movimentação de cards, troca de logo e upload de prints nas telas dos dispositivos (`Laptop` e `Tablet`).
