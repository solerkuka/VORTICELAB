# VórticeLab — recriação com ritmo, vibração e contraste

## Análise do que existe hoje

O arquivo v5 já tem uma base forte: paleta do moodboard (Ink, Moss, Ember, Bone, Clay), tipografia Fraunces / Manrope / IBM Plex Mono, espirais e "correntes de vento" em SVG geradas por script, partículas, reveal on scroll e barra de progresso.

Problemas identificados na leitura:

1. **Números 01–04 dominam.** O `.ghost-num` chega a 150px atrás de cada título, e ainda existe o rail lateral com "02 / 04" e as micro-etiquetas "FIELD / 01", "PROTOCOL / 03". A numeração aparece em três camadas ao mesmo tempo e rouba a atenção do título real.
2. **Monotonia de fundo.** Praticamente tudo é Ink escuro; só as três "dobras" de citação alternam claro/escuro. Blocos longos (Legitimidade, Atuação, Metodologia) correm no mesmo tom, sem respiro.
3. **Contrastes fracos.** Texto corrido em `rgba(bone, .7)` sobre Ink, cards com fundo quase igual ao fundo da página, bordas a 8% de opacidade — os limites dos blocos somem.
4. **Movimento decorativo, não narrativo.** As animações (spin, drift, partículas) rodam em loop no fundo, mas nada acompanha o gesto de rolar; a leitura não ganha direção.
5. **Ícones subutilizados.** Só 5 símbolos abstratos, repetidos, sempre no mesmo tamanho e sem reação.

Texto: mantido 100% igual — nenhuma frase, título ou parágrafo será alterado.

## Direção proposta

**Numeração rebaixada a marcador discreto.** Remover o `ghost-num` gigante. No lugar: um marcador mono pequeno (`01 —`) alinhado ao rótulo da seção, em Moss claro, mais uma régua fina que se desenha ao entrar na tela. Rail lateral vira pontos (sem dígitos). Nos cards de Atuação e nas Etapas os índices caem para 11px, cor Moss, ao lado do ícone — deixam de competir com os títulos.

**Ritmo claro/escuro alternado.** A página passa a ser uma sequência de faixas full-bleed com fundos alternados, não só nas citações:

```text
Hero            ESCURO (ink, campo de partículas)
Dobra 1         ESCURO+  (mais denso, quase preto)
Equilíbrio      CLARO (bone) — texto Ink, respiro máximo
Dobra 2         ESCURO (ember sobre ink)
Atuação         ESCURO (cards com contraste real)
Dobra 3         CLARO (bone, citação em Clay)
Metodologia     ESCURO+ (bloco Moss profundo)
Etapas          CLARO (bone) — linha do tempo legível
Editorial       ESCURO
Contato         CLARO (bone) — fecho luminoso
```

Cada transição ganha uma borda de "corrente" em SVG (a mesma linguagem de linhas do moodboard) que costura uma faixa na outra, então o corte não fica seco.

**Contraste real.** Texto corrido sobe para ~90% de opacidade; nas faixas claras usa Ink puro. Cards deixam de ser transparentes: superfície própria (um passo mais claro ou mais escuro que a faixa), borda visível e sombra. Termos destacados (`.hl`) ganham par de cor específico para faixa clara (Clay) e escura (Ember).

**Movimento ligado à rolagem.** Em vez de loops soltos:
- espirais e campos de linha com parallax por faixa, em velocidades diferentes;
- linhas SVG que se desenham (stroke-dashoffset) quando a seção entra;
- reveal em cascata por elemento, com deslocamento lateral alternado (esquerda/direita) para dar direção de leitura;
- barra de progresso e marcador de capítulo que acendem conforme a seção ativa;
- micro-pulso nos ícones quando a seção entra em foco, e reação no hover dos cards.

**Vibração.** Camada ambiente de "campo" por seção: pontos e ondas concêntricas com respiração lenta, mais densa nas faixas escuras, quase invisível nas claras. Nos títulos de dobra, um leve tremor luminoso (glow pulsante em Ember) — sutil, sem piscar.

**Ícones ampliados.** Do conjunto atual (diamante, onda, órbita, arco, ponto) para ~10 símbolos abstratos de traço fino — espiral, nó, campo, meridiano, vórtice, convergência — um por pilar/etapa, animados no reveal. Nada literal (sem mãos, cristais, chakras), conforme a direção de imagem do moodboard.

Tudo respeita `prefers-reduced-motion`.

## Detalhes técnicos

- Página única em `src/routes/index.tsx`, componentes por seção em `src/components/vortice/` (Hero, Break, Equilibrio, Atuacao, Metodologia, Etapas, Editorial, Contato, Footer).
- Tokens do moodboard convertidos para oklch em `src/styles.css`: `--ink`, `--ink-deep`, `--moss`, `--moss-bright`, `--ember`, `--ember-bright`, `--bone`, `--clay`, mais tokens de faixa (`--band-dark`, `--band-light` e respectivos foregrounds) e sombras. Sem cores hardcoded nos componentes.
- Fontes Fraunces / Manrope / IBM Plex Mono via `<link>` no `__root.tsx` (não via @import no CSS).
- Geradores SVG (espiral, correntes de vento, campos) como funções TS puras que devolvem `d` de path e renderizam em JSX — nada de manipulação DOM imperativa como no arquivo original.
- Reveal / draw-line / progresso / seção ativa em hooks (`useReveal`, `useScrollProgress`) com IntersectionObserver, montados só no cliente.
- Ícones em um `<IconSprite />` único com `<use>`, como no original.
- `head()` da rota com título e descrição próprios da VórticeLab.

## Fora de escopo

Nenhuma mudança de texto, nenhum backend, nenhuma página extra além do editorial já existente como cards estáticos.
