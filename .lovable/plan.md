# Faixa clara: do bege para um subtom cinza/verde

## O que muda

Apenas o **fundo das faixas claras** (Equilíbrio, Etapas, dobras claras, cards claros do Editorial). Nada mais.

Permanecem exatamente como estão:

- Ink #12181A nas faixas escuras
- Bone #EDE3D0 como cor de texto sobre escuro
- Ember #C98A4B e Moss #2B4A3D como acentos
- Clay #7A3F30 nos títulos/destaques da faixa clara
- Tipografia, espaçamentos, animações, ícones, textos

## Subtons candidatos para a faixa clara

Todos derivados da própria paleta (Ink e Moss diluídos), sem cor nova:

| Opção | Superfície | Card | Caráter |
|---|---|---|---|
| A — Cinza frio | #EFF1F1 | #F7F8F8 | Ink a 6%. Mesmo DNA do fundo escuro, zero amarelo. Mais "laboratório". |
| B — Cinza esverdeado | #EBEEEC | #F4F6F4 | Ink + sopro de Moss. Frio, mas ainda orgânico. |
| C — Verde pálido | #E4EBE6 | #EFF3F0 | Moss a 10%. Assinatura de marca mais forte, ainda calmo. |
| D — Bone dessaturado | #EDE9E3 | #F5F3EF | Mantém a memória do bege, só tira o amarelo. Mudança mais discreta. |

Recomendação: **B**, por esfriar de forma nítida sem soltar da paleta (o verde vem do Moss, que já é da marca).

## Ajustes de acompanhamento (consequência direta)

- Texto da faixa clara passa a Ink puro (já é), com contraste conferido sobre a nova superfície.
- Borda/filete da faixa clara recalculado a partir do Ink para não sumir no cinza.
- Linhas SVG de fundo da faixa clara: mesma forma, cor recalculada para o novo fundo.

## Detalhes técnicos

Alteração isolada em `src/styles.css`, no bloco `.band-light`: `--band`, `--band-surface`, `--band-line` e `--band-halo`. Nenhum componente é editado; todos já consomem esses tokens.

## Fora de escopo

Cores das faixas escuras, tipografia, textos, layout, animações.
