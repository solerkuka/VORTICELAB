# Página 2: páginas internas das frentes, cards coloridos e Etapas

## 1. Atuação, Metodologia e Editorial viram páginas internas

Hoje esses três nomes (no topo e nos cards) apontam para endereços de subdomínio que ainda não existem. Passam a levar para rotas internas do próprio site:

- `/atuacao`
- `/metodologia`
- `/editorial`

Cada uma reaproveita o mesmo estilo visual da página 2 (fundo escuro único, Fraunces/Manrope/Plex Mono, espiral discreta no topo, revelações suaves ao rolar), com:

- cabeçalho igual ao da página 2 (logo + marca + as três frentes + "Fale conosco"), com a frente atual em destaque;
- título, linha de apoio e o texto de abertura que já existe para aquela frente — nada de texto novo inventado;
- em `/editorial`, a lista dos artigos já existentes, cada um levando para a página de artigo (`/editorial/<slug>`) que já funciona;
- bloco de contato + rodapé no fim, como na página 2.

Os links abrem na mesma aba (navegação interna), sem `target="_blank"`.

## 2. Cards das frentes em três cores

O bloco de frentes na parte de baixo da página 2 deixa de ter os três cards idênticos. Cada um recebe sua cor da paleta já existente:

| Frente      | Cor    |
| ----------- | ------ |
| Atuação     | Ember (dourado)    |
| Metodologia | Moss (verde musgo) |
| Editorial   | Clay (terracota)   |

A cor aparece no filete superior do card, no título, no ícone/seta "Acessar" e num leve tingimento do fundo e da borda no hover — mantendo a sobriedade da página, sem brilhos.

## 3. Trazer "As Etapas do Alinhamento" para a página 2

A seção de etapas que existe na home entra na página 2, entre Frentes e Contato, redesenhada no estilo da página 2:

- rótulo "As Etapas do Alinhamento" em mono caixa-alta;
- as três etapas (01, 02, 03) em grade de três colunas, separadas por filete, com número, título e texto;
- sem ondas, anéis ou pulsos — apenas a mesma revelação em cascata usada na página.

O texto das etapas é o mesmo já existente, movido para um arquivo de conteúdo compartilhado para que home e página 2 usem a mesma fonte.

## Notas técnicas

- Novas rotas: `src/routes/atuacao.tsx`, `src/routes/metodologia.tsx`, `src/routes/editorial.index.tsx`, cada uma com `head()` próprio (título/descrição/og distintos).
- O layout/CSS da página 2 sai de `pagina2.tsx` para um módulo compartilhado (`src/components/vortice/p2.tsx`) usado pelas quatro páginas, evitando duplicação.
- `src/content/frentes.ts`: campo `url` passa a ser rota interna (`/atuacao`, etc.) e ganha um campo de cor de acento.
- `src/content/etapas.ts` (novo): texto das etapas, consumido pela home e pela página 2.
- A home (`/`) continua funcionando; apenas passa a importar as etapas do novo arquivo e os links das frentes viram internos.

## Fora de escopo

Reescrita de textos, mudança de paleta geral e alterações no visual da home.
