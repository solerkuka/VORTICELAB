# Home mais sóbria: eficiência, elegância, autoridade

Objetivo: tirar o "ar esotérico" da página principal sem mexer em uma linha de texto. O público (empresários de alto nível) precisa ler autoridade, discrição e precisão — não mística.

## O que está causando o efeito esotérico hoje

Na home existem hoje, empilhados: partículas flutuantes, campos de vento animados, anéis concêntricos pulsantes, um cluster de espirais na área de contato e fundos de citação com curvas e halo radial. São 15+ camadas decorativas animadas ao longo da rolagem — é isso que soa "místico" mais do que o texto em si.

## Direção proposta

Trocar "energia visível" por "precisão visível":

1. **Remover** partículas, campos de vento, anéis pulsantes e o cluster de espirais das seções da home.
2. **Manter um único símbolo**: a espiral da marca aparece só uma vez, no Hero, discreta e estática (ou com rotação lentíssima), como assinatura — não como textura de fundo repetida.
3. **Citações**: fundo liso no mesmo tom escuro, sem curvas nem halo. O peso vem da tipografia serifada e do espaço em branco, com um filete curto em Ember acima da frase.
4. **Faixas claro/escuro**: manter a alternância (dá ritmo institucional), mas com transições retas ou curva mínima, sem "ondas".
5. **Ritmo tipográfico**: rótulos em mono com tracking amplo, títulos Fraunces light, corpo com medida de leitura controlada (~60ch) e mais respiro vertical entre blocos — o luxo vem do espaço, não do enfeite.
6. **Movimento**: só revelação suave na entrada (fade + 12px) e micro-transições em hover de cards/CTAs. Nada em loop infinito.
7. **Cards de Atuação / Metodologia / Editorial**: acabamento sóbrio — borda hairline, acento de cor fino no topo, sem gradientes radiais brilhando no hover.
8. **Contato**: bloco limpo e centrado, sem espirais atrás; CTA principal sólido em Ember e contato secundário em texto.

Resultado: mesma narrativa e mesmo texto, leitura mais rápida, aparência de consultoria de alto padrão.

## Detalhes técnicos

- `src/components/vortice/sections.tsx`: remover usos de `Particles`, `WindField`, `Rings`, `SpiralCluster`; simplificar `Quote` para fundo sólido; ajustar espaçamentos e escalas tipográficas.
- `src/components/vortice/field.tsx`: manter os componentes exportados (usados por outras rotas), apenas deixar de consumi-los na home; `Seam` passa a operar em modo reto/curva mínima.
- `src/routes/index.tsx`: manter a ordem das seções e a barra de progresso; ajustar apenas os `Seam`.
- Nenhuma alteração de conteúdo textual, rotas ou links.
