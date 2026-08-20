# Editorial clicável + páginas de artigo

## O que muda na seção Editorial (home)

- Cada um dos três cards vira um link real para a página do artigo, com afordância clara:
  - rótulo "LEIA NA ÍNTEGRA →" no rodapé do card, com seta que avança no hover;
  - cursor de link, borda que acende em âmbar, leve elevação (já existente) e foco visível por teclado.
- Cores alternadas entre os cards, como pedido: 1º escuro (ink-raise), 2º claro (bone/bone-lift com texto escuro e acento clay), 3º escuro. O card claro usa os tokens da faixa clara para não quebrar o sistema de cores.
- Títulos dos cards passam a bater com os artigos reais do arquivo enviado:
  1. "Além do Compliance: a engenharia de bastidores que blinda o ativo"
  2. "Decisões de expansão e o momento certo"
  3. "Instituições centenárias, método atual"
  O resumo de cada card usa o subtítulo do próprio artigo. Nenhum outro texto do site é alterado.

## Páginas de artigo

Três rotas novas, seguindo exatamente o template HTML enviado, traduzido para o design system do site:

- `/editorial/alem-do-compliance`
- `/editorial/decisoes-de-expansao`
- `/editorial/instituicoes-centenarias`

Estrutura de cada página (idêntica ao template):
- topo com "VórticeLab" e botão "Fale conosco";
- link "← Editorial" que volta para a home na âncora `#editorial`;
- cabeçalho: kicker "Editorial", título em serifa, subtítulo em itálico, assinatura "Por VórticeLab";
- corpo com capitular âmbar no primeiro parágrafo, largura de leitura confortável (~66ch), texto dos artigos na íntegra e sem edição;
- bloco de CTA "Discrição e método, aplicados à sua próxima decisão." + "Fale conosco" (leva para o contato da home);
- "Continue lendo" com os dois outros artigos em cards;
- rodapé "VórticeLab · 51° · Porto Alegre".

Fundo escuro (Ink), como no template, com um toque discreto dos elementos circulares do site para manter a identidade — sem interferir na leitura.

## Detalhes técnicos

- Conteúdo dos três artigos em um módulo `src/content/editorial.ts` (slug, título, subtítulo, parágrafos), consumido tanto pelos cards da home quanto pelas rotas.
- Uma rota dinâmica `src/routes/editorial.$slug.tsx` com `head()` por artigo (title, description, og:title, og:description, og:type=article) e `notFound()` para slug inexistente.
- Navegação com `<Link to="/editorial/$slug" params={{ slug }}>`; a volta para o contato/editorial usa âncora na home.
- Componentes reaproveitados: `Band`, `Wrap`, `Reveal`, `Rings`, tokens de cor existentes. Sem cores hardcoded.
