# Limpar o bege, suavizar transições e transformar 02/03/04 em vitrine de subdomínios

Três frentes, todas de aparência e estrutura da home. Nenhum texto dos conteúdos é reescrito.

## 1. Tirar o bege que sobrou

O fundo claro já virou gelo, mas o creme continua aparecendo em pontos que apontam direto para `--bone`:

- **Costuras (Seam) entre faixas**: `src/routes/index.tsx` passa `var(--bone)` como cor da faixa clara nas costuras. Toda transição de/para faixa clara ainda desenha um bloco bege. Passa a usar o mesmo gelo da `.band-light`.
- **Campos de linhas em faixas escuras** (Metodologia e Etapas, `sections.tsx` ~L359 e ~L415) usam `color="var(--bone)"` — linhas com sopro amarelo sobre o escuro. Passam para um cinza frio derivado do Ink/branco.
- **Cluster de espirais do Hero** inclui `var(--bone)` entre os traços — trocado pelo mesmo cinza frio.
- `--bone` permanece **apenas** como cor de texto sobre fundo escuro e na capitular do artigo. O botão Clay do Contato mantém o texto creme.

Para isso, a faixa clara ganha uma variável global (`--surface-light`) em `:root`, usada tanto pela `.band-light` quanto pelas costuras — uma única fonte de verdade, sem valor solto repetido.

## 2. Transições entre faixas

Hoje a costura é uma onda sólida de 90px que corta a página, e ela é desenhada mesmo quando as duas faixas são quase da mesma cor (Ink → Ink-void), o que produz aquele degrau esquisito de "preto para verde escuro".

- Quando as duas faixas são escuras: a onda sólida sai; fica só um degradê vertical curto (48px) de uma cor para a outra, com as linhas ember bem discretas atravessando. Transição sem borda visível.
- Quando há troca de claro para escuro (ou o inverso): mantém a costura desenhada, mas com curva mais rasa e uma borda em degradê de 24px de cada lado, para o corte não ficar duro.
- As linhas ember da costura ganham opacidade menor sobre fundo claro (hoje somem/brigam).

## 3. Atuação, Metodologia e Editorial viram subdomínios

Essas três faixas saem da home e são substituídas por **um bloco único de vitrine**, com três cartões:

```text
FRENTES DE TRABALHO
┌──────────────┬──────────────┬──────────────┐
│ ícone        │ ícone        │ ícone        │
│ Atuação      │ Metodologia  │ Editorial    │
│ uma frase    │ uma frase    │ uma frase    │
│ Acessar →    │ Acessar →    │ Acessar →    │
└──────────────┴──────────────┴──────────────┘
```

- Cada cartão é um link para o subdomínio correspondente, abrindo em nova aba, com `rel="noopener"`.
- Como os endereços ainda não estão definidos, eles ficam num único arquivo de configuração (`src/content/frentes.ts`) com valores provisórios (`https://atuacao.vorticelab.com` etc.). Trocar depois é editar uma linha por frente.
- A frase de cada cartão é a linha de abertura que já existe hoje em cada seção — nada de texto novo.

**Numeração**: com só uma faixa de conteúdo entre Hero e Contato, a sequência 01–04 perde sentido. A `SectionHead` deixa de exibir o numeral e o filete vertical; fica o ícone + rótulo em mono caixa-alta, com a régua hairline e o marcador de acento embaixo — o mesmo peso editorial, sem a contagem.

O ritmo claro/escuro é refeito para as seções restantes (Hero → citação → Equilíbrio → citação → Frentes → Etapas → Contato), mantendo a alternância.

## 4. Navegação de capítulos no mobile

Hoje ela só existe no desktop. Passa a aparecer no mobile na lateral direita como traço + nome curto do capítulo: o capítulo ativo mostra o rótulo, os demais ficam só como risquinho fino. Texto pequeno em mono, fundo translúcido da faixa, sem cobrir o conteúdo.

## Detalhes técnicos

- `src/styles.css`: nova `--surface-light` em `:root`, consumida pela `.band-light`.
- `src/components/vortice/field.tsx`: `Seam` ganha uma variante suave (degradê) para pares de faixas escuras.
- `src/components/vortice/primitives.tsx`: `SectionHead` sem a prop `index`.
- `src/components/vortice/sections.tsx`: remove `Atuacao`, `Metodologia` e `Editorial` da home; adiciona `Frentes`; ajusta cores dos campos de linhas.
- `src/content/frentes.ts` (novo): título, frase, ícone e URL de cada frente.
- `src/routes/index.tsx`: nova sequência de faixas e costuras; nav de capítulos com rótulo no mobile.
- As rotas de artigo (`/editorial/$slug`) continuam funcionando; o conteúdo em `src/content/editorial.ts` é preservado para migrar ao subdomínio.

## Fora de escopo

Textos, paleta das faixas escuras, tipografia e o conteúdo das páginas de artigo.
