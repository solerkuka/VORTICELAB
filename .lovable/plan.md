# Faixa clara: bege → cinza-quase-branco (Gelo)

Escolha: **Gelo** — Ink a 3% sobre branco = `#F8F8F8`. Branco com um sopro frio, leitura de "tinta de parede" (Surf / Nimbus). Só as faixas claras e suas superfícies internas mudam; nada mais é tocado.

## O que muda

1. Tokens de superfície da `.band-light` em `src/styles.css`.
2. Caixinhas que hoje usam `bg-bone-lift` (creme quente hardcoded) passam a `bg-band-surface`, para herdarem o novo tom gelo e pararem de destoar. São três pontos:
   - **Etapas** — cards das 3 etapas (`src/components/vortice/sections.tsx` ~L492)
   - **Equilíbrio** — aside "Métrica reconhecida pelo próprio mercado" (~L217)
   - **Editorial** — card do meio (claro) (~L541)
   Adicionalmente, o card de Etapas ganha filete `border-band-line` para separar do fundo gelo (hoje é `border-transparent` e some).

## Permanece idêntico

- Ink #12181A nas faixas escuras
- Bone #EDE3D0 como cor de texto sobre escuro (e capitular de artigo)
- Ember #C98A4B e Moss #2B4A3D como acentos
- Clay #7A3F30 nos títulos/destaques da faixa clara
- Tipografia, espaçamentos, animações, ícones, textos, layout

## Novos valores (`.band-light`)

```css
.band-light {
  --band: oklch(0.975 0.002 240);            /* #F8F8F8  Ink 3% — Gelo */
  --band-surface: oklch(0.99 0.001 240);       /* #FCFCFC  card um passo acima */
  --band-fg: var(--ink-deep);
  --band-muted: color-mix(in oklab, var(--ink-deep) 78%, transparent);
  --band-accent: var(--clay);
  --band-line: color-mix(in oklab, var(--ink-deep) 14%, transparent);
  --band-halo: color-mix(in oklab, var(--clay) 14%, transparent);
  background-color: oklch(0.975 0.002 240);
  color: var(--ink-deep);
}
```

- `--band`: #F8F8F8 — o cinza-quase-branco escolhido
- `--band-surface`: #FCFCFC — cards ficam um passo mais claros que a faixa (separação visível)
- `--band-line`: hairline em Ink a 14% — visível sobre o cinza sem gritar
- `--band-halo`: halo Clay suave para profundidade nas citações claras

## Acompanhamento (consequência direta, mesmo bloco)

- Texto da faixa clara já é Ink puro; confirmar contraste sobre #F8F8F8 (WCAG AA passa folgado).
- Linhas SVG de fundo da faixa clara: já usam `var(--band-line)`, herdam o novo tom automaticamente.
- `--band-muted` sobe de 72% para 78% para manter legibilidade do secundário sobre a superfície mais clara.

## Fora de escopo

Cores das faixas escuras, tipografia, textos, layout, animações, páginas de artigo.
