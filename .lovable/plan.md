# Transformar a seção "Frentes de Trabalho" em três blocos distintos

## Contexto atual
A página tem uma única seção `Frentes` (faixa escura, `band-dark`) com título "Frentes de Trabalho", um parágrafo introdutório e três cartões idênticos (Atuação, Metodologia, Editorial) que apontam para subdomínios. As três frentes compartilham o mesmo formato e a mesma cor de fundo.

## Objetivo
Substituir essa única seção por **três blocos separados**, cada um com:
1. Um **texto de introdução** próprio acima do cartão (lead convidativo).
2. Um **cartão/acesso** ao subdomínio.
3. **Cores alternadas** — Atuação (escura), Metodologia (clara), Editorial (escura) — criando o contraste pedido.
4. **Formatos visuais diferentes** para cada bloco, em vez de três cartões iguais.

Não há alteração de texto de produto: os textos curtos das frentes (`f.line`) continuam os mesmos. Apenas adicionamos leads de introdução e redesenhamos os cartões.

## Blocos propostos

### 1. Atuação — faixa escura (`band-dark`)
- **Lead:** "Veja como funciona a nossa atuação" (mono eyebrow + display italic).
- **Formato:** cartão largo em layout dividido — ícone `vortex` à esquerda, à direita o texto `f.line` e o link "Acessar →".
- Mantém `id="atuacao"` para âncora/scroll.

### 2. Metodologia — faixa clara (`band-light`) — "outra cor"
- **Lead:** "Entenda melhor como funciona nossa metodologia".
- **Formato:** banner horizontal com elemento circular (`Rings`) em um lado e o texto + "Acessar →" no outro, sobre fundo claro com acento `clay`.

### 3. Editorial — faixa escura (`band-dark`)
- **Lead:** "Leia como instituições de alta exigência incorporam a leitura energética ao próprio rigor operacional."
- **Formato:** bloco editorial centralizado, estilo citação/teaser, com o texto e "Acessar →".

## Implementação

### `src/content/frentes.ts`
Adicionar um campo opcional `lead` em cada frente com o texto de introdução correspondente (mantendo `line` intacto).

### `src/components/vortice/sections.tsx`
- Remover a função `Frentes()` atual (seção única com três cartões idênticos).
- Criar três componentes: `AtuacaoBlock`, `MetodologiaBlock`, `EditorialBlock`, cada um um `<Band>` com `tone` próprio, `<Wrap>`, lead e cartão em formato distinto. Reutilizar `Reveal`, `Icon`, `Rings`, `WindField` existentes.
- Cada cartão mantém o link `target="_blank"` para o subdomínio.

### `src/routes/index.tsx`
- Substituir `<Frentes />` (e as `Seam` ao redor) pela sequência:
  ```
  <Seam from={INK_VOID} to={INK} soft />
  <AtuacaoBlock />
  <Seam from={INK} to={LIGHT} />
  <MetodologiaBlock />
  <Seam from={LIGHT} to={INK} />
  <EditorialBlock />
  <Seam from={INK} to={LIGHT} />
  <Etapas />
  ```
- Atualizar `CHAPTERS` (scroll-spy): remover `"frentes"`, adicionar `"atuacao"`, `"metodologia"`, `"editorial"`.

## Verificação
- Confirmar contraste dos três blocos (escuro/claro/escuro) no preview mobile e desktop.
- Validar que os três cartões apontam aos subdomínios corretos em abas novas.
- Conferir que as `Seam` curvas preservam a transição sem frestas brancas.
