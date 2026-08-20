# Fundos mais calmos (topo e final) + texto completo na primeira dobra

## O problema

Hoje o topo e o bloco final empilham várias camadas ao mesmo tempo no mesmo ponto da tela (espiral grande, campo de pulso, anéis, partículas). Elas se cruzam atrás do texto e o resultado lê como ruído, não como vibração. Além disso, na última versão o parágrafo "Unimos a sabedoria das tecnologias ancestrais..." saiu da primeira dobra.

## O que vai mudar

### 1. Novo fundo "constelação de espirais" (topo)

- Exatamente **três** espirais, em tamanhos claramente diferentes (uma grande, uma média, uma pequena), posicionadas em cantos distintos e sangrando para fora da tela — nunca centralizadas atrás do texto.
- Cada uma com opacidade e velocidade de rotação próprias (a grande gira bem devagar, a pequena um pouco mais rápido, em sentidos opostos): isso dá vibração e alinhamento em vez de bagunça.
- Uma máscara suave (gradiente radial) apaga as linhas na área onde o título e o parágrafo ficam, garantindo que nada "brigue" com as letras.
- As camadas extras que hoje se somam no mesmo canto (campo de pulso + anéis + partículas sobrepostos) são reduzidas a uma única camada discreta de partículas.

### 2. Mesmo tratamento no bloco final (Contato)

- Mesma composição de três espirais em escalas diferentes, agora na paleta clara, saindo pelas bordas laterais e inferior.
- Opacidade bem mais baixa que a atual e remoção da sobreposição espiral + pulso + anéis no mesmo centro, para o "Fale conosco." ficar limpo e os botões respirarem.

### 3. Texto completo de volta na primeira dobra

- O parágrafo "Unimos a sabedoria das tecnologias ancestrais à dinâmica dos negócios de alta performance..." volta para dentro da dobra, junto com o título, a linha mono e o botão "Fale conosco".
- Nada de corte de conteúdo: para caber em telas de celular, reduzimos tamanhos de fonte, entrelinhas e espaçamentos verticais do bloco (título um pouco menor no mobile, parágrafos em escala compacta, menos margem entre os elementos, botão mais enxuto).
- A frase em itálico "A engenharia sutil por trás das decisões que moldam o futuro." permanece logo abaixo da dobra, como fecho da abertura.

## Detalhes técnicos

- `src/components/vortice/field.tsx`: novo componente `SpiralCluster` que renderiza três `Spiral` com `scale`/posição/opacidade/duração de giro distintas e aceita uma máscara radial (`mask-image`) para abrir espaço ao texto.
- `src/styles.css`: variações de duração/direção do giro (`vx-spin-slow`, `vx-spin-rev`) reaproveitando a animação existente; nenhum token de cor novo.
- `src/components/vortice/sections.tsx`:
  - `Hero`: substitui as camadas atuais pelo `SpiralCluster`, mantém `Particles` em intensidade baixa, e reorganiza a coluna de texto para conter título + linha mono + parágrafo "Unimos..." + CTA dentro de `100svh` com escala tipográfica compacta em mobile.
  - `Contato`: substitui `Spiral` + `PulseField` + `Rings` centralizados por um `SpiralCluster` claro e discreto.
- Nenhuma alteração de texto: só tamanho, espaçamento e posição.
