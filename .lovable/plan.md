# O que falta

## Já concluído
- Primeira dobra (mobile): título, linha mono e o parágrafo completo "Unimos a sabedoria..." cabem em `100svh`, com o botão "Fale conosco" visível sem rolar.
- Fundo do topo trocado pela constelação de 3 espirais (tamanhos e velocidades diferentes) com máscara que limpa o centro onde fica o texto.
- Bloco final "Fale conosco" limpo: sem o amontoado de anéis/pulso central, agora com as mesmas 3 espirais discretas, WhatsApp + e-mail lado a lado e a nota final ancorada num filete.

## Falta fazer

1. **Miolo da página ainda tem sobreposição**
   As seções intermediárias (Equilíbrio, Atuação, Metodologia, Etapas, Editorial) ainda usam anéis soltos e um campo de pulso grande. Aplicar a mesma regra das 3 formas: no máximo três elementos por faixa, tamanhos distintos, sangrando pelas bordas e com a área do texto sempre limpa.

2. **Conferir todas as dobras no mobile**
   Passar seção a seção em 394px verificando respiro, quebras de linha e se nenhum cabeçalho começa com um vazio grande antes do conteúdo.

3. **Conferir desktop e tablet**
   A constelação foi calibrada no mobile; validar que em telas largas as espirais não ficam nem sumidas nem invasivas.

4. **CTAs intermediários**
   Revisar os links "Quero entender melhor" / "Como funciona" — posição, repetição e se todos ancoram corretamente no bloco de contato.

5. **Acabamento**
   Checar `prefers-reduced-motion` (rotações desligadas), contraste dos textos secundários nas faixas claras e o metadata da rota (title/description) da home.

## Detalhes técnicos
- Componente base: `SpiralCluster` em `src/components/vortice/field.tsx` (máscara radial via `mask-image`, três espirais com `vx-spin-slow` / `vx-spin-rev` / `vx-spin-fast`).
- Substituições nas seções ficam em `src/components/vortice/sections.tsx`; nenhuma alteração de texto.
