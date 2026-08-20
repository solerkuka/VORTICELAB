# Círculos do moodboard, primeira dobra e CTAs

## O que muda

### 1. Elementos circulares nos vazios
- Novo elemento decorativo reutilizável ("Rings"): arcos e círculos concêntricos parciais, do moodboard, recortados pela borda da tela — quartos de círculo em cantos, meias-luas atrás de blocos de texto.
- Distribuídos nos espaços hoje vazios: laterais das faixas de citação, respiro entre cabeçalho e conteúdo em Atuação/Metodologia, coluna vazia ao lado das Etapas, rodapé de Editorial.
- No mobile os anéis ficam maiores e sangrados nas bordas (só uma fatia visível), preenchendo o vazio sem competir com o texto; opacidade baixa e cor da faixa (clay em claro, ember/bone em escuro).

### 2. Primeira dobra (mobile e desktop)
- Hierarquia: título, uma linha de apoio e o botão "Fale conosco" acima da dobra; os demais parágrafos passam a ficar logo abaixo, com o mesmo texto (nada removido).
- Ajustes de escala: título e parágrafos com clamp mais contido no mobile, margens verticais reduzidas, nav mais compacta, altura da seção passa a caber em 100svh.
- Indicador "rolar" reposicionado para não colidir com o botão.

### 3. Bloco final "Fale conosco"
- Dois CTAs claros lado a lado (empilhados no mobile): WhatsApp (51) 99999-0101 como ação primária e e-mail contato@vorticelab.com.br como secundária, ambos com ícone.
- A linha "Atendimento mediante indicação ou avaliação de compatibilidade." vira uma nota discreta em caixa fina com filete, ancorada abaixo dos botões — resolvendo o aspecto solto atual.
- Composição circular centralizada reforçada (espiral + anéis) para o bloco ler como fecho da página.

### 4. CTAs ao longo da página
- Novos CTAs de texto ao fim das seções: "Quero entender melhor" (após Equilíbrio/Atuação) e "Como funciona" (após Metodologia/Etapas).
- Todos apontam para o bloco Contato, conforme escolhido, em estilo link-com-seta (não botão cheio) para não pesar o layout.

### 5. Revisão de dobras
- Passagem por cada faixa ajustando padding vertical no mobile (menos ar morto), largura máxima de texto e tamanho de fonte, mantendo a alternância claro/escuro e as costuras SVG.

## Notas técnicas
- Novo componente `Rings` em `src/components/vortice/field.tsx` (SVG, arcos concêntricos, props de raio/ângulo/cor/opacidade), sem animação em loop pesada — só parallax leve e revelação.
- `Hero`, `Quote`, `Atuacao`, `Metodologia`, `Etapas`, `Editorial`, `Contato` em `src/components/vortice/sections.tsx` recebem os anéis e os ajustes de espaçamento.
- Link WhatsApp: `https://wa.me/5551999990101`, abrindo em nova aba.
- Nenhum texto de conteúdo é alterado.
