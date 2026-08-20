# Refinar a numeração e elevar o contraste — direção elegante

O número atual (glifo enorme com contorno + brilho + respiração) lê como "efeito" e não como editorial. A correção é trocar o efeito por hierarquia: tipografia serifada fina, filete e espaço.

## Numeração das seções (01–04)

- Trocar o contorno vazado + glow pulsante por um numeral em serifa display (Fraunces), peso leve, tamanho médio (clamp 2.4–3.4rem), cor do acento em opacidade calma — sem stroke, sem sombra, sem respiração.
- Alinhamento editorial: numeral na margem esquerda, separado do rótulo por um filete vertical fino (1px) que se desenha na entrada.
- Rótulo da seção continua em mono caixa-alta, tracking largo, cor plena — ele é o elemento de leitura, o número é a âncora silenciosa.
- Régua ondulada abaixo vira uma linha reta hairline com um pequeno traço acentuado à esquerda (marcador de capítulo), animada por stroke-dashoffset.
- Ícone reduzido e alinhado à baseline do rótulo, sem pulso constante — micro-movimento apenas na entrada e no hover da seção.

## Contraste e refino geral

- Faixas claras: escurecer o texto secundário (band-muted) e aumentar a separação entre superfície do card e fundo, para os cards não sumirem.
- Faixas escuras: elevar o contraste do corpo de texto e dar às bordas de card uma linha mais definida em vez de um véu translúcido.
- Acento: reservar o ember/clay para poucos pontos por faixa (número, marcador, destaque inline). Onde hoje há acento em excesso, passar para a cor de texto normal.
- Trocar brilhos difusos por sombras discretas e separação por linha — menos "neon", mais impresso.

## Movimento

- Manter parallax, desenho de linhas e reveals; remover as animações em loop nos elementos tipográficos (respiração/pulso) que causam a sensação de exagero. Loops ficam só nos campos SVG de fundo, em amplitude baixa.

## Detalhes técnicos

- `src/components/vortice/primitives.tsx`: reescrever `SectionHead` (numeral serif, filete vertical, hairline com marcador).
- `src/styles.css`: ajustar `--band-muted`, `--band-surface` e `--band-line` nas três faixas; reduzir amplitude/uso de `vx-breathe` e `vx-glow`.
- `src/components/vortice/icons.tsx`: pulso do ícone passa a ser opcional/entrada apenas.
- Texto do site permanece inalterado.
