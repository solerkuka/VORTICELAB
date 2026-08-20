# Faixas de citação: resolver o vazio de baixo contraste

## O problema

Na faixa da citação, o fundo é preenchido por linhas em zigue-zague de traço muito fino e opacidade baixa, espalhadas de forma uniforme por toda a área. O resultado é uma textura que quase desaparece: nem lê como fundo limpo, nem como elemento gráfico intencional — dá a sensação de "área vazia com sujeira".

## Direção

Trocar a textura difusa por uma composição com hierarquia clara: pouca coisa, mas visível.

1. **Halo atrás da citação** — um brilho radial suave (âmbar na faixa escura, argila na clara) centrado no texto, criando profundidade e separando a frase do fundo.
2. **Campo de linhas com foco** — em vez de linhas uniformes de ponta a ponta, poucas linhas contínuas e mais nítidas, com máscara de esmaecimento nas bordas e no centro, para que passem por trás da citação sem competir e sumam nas extremidades. Duas ou três delas ganham traço mais forte como acento.
3. **Moldura tipográfica** — aspas decorativas em serifa (grandes, discretas) e um filete horizontal curto com marcador de acento acima e abaixo da frase, ancorando a composição no centro.
4. **Contraste do texto** — elevar o tom da citação para o acento pleno da faixa e reforçar a legibilidade sobre o halo.
5. **Movimento contido** — deriva lenta apenas no campo de linhas; nenhum pulso ou brilho contínuo no texto.

Aplicar às duas faixas de citação (escura e clara), respeitando os tokens de cada faixa. Nenhum texto será alterado.

## Detalhes técnicos

- `src/components/vortice/field.tsx`: adicionar suporte a máscara/gradiente de esmaecimento e a linhas com espessura variável no `WindField` (ou um novo `QuoteField` dedicado, mantendo o `WindField` atual intacto para as outras seções).
- `src/components/vortice/sections.tsx`: reescrever o componente `Quote` com halo radial, aspas, filete de acento e classes de contraste.
- `src/styles.css`: se necessário, novos tokens de halo por faixa (`--band-halo`) em `.band-deep` e `.band-light`.
