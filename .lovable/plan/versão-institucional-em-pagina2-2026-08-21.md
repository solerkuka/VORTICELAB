# Versão institucional em /pagina2

Uma segunda rota (`/pagina2`) com o mesmo conteúdo textual da home, porém com uma direção visual corporativa: autoridade, sobriedade e precisão — sem espirais, halos, partículas ou brilhos.

## O que sai (o que hoje soa esotérico)

- Espirais girando (`SpiralCluster`), anéis concêntricos (`Rings`), campos de partículas e "correntes de vento" (`WindField`, `Particles`, `QuoteField`).
- Halos radiais, `drop-shadow` em tom ember atrás da logo, `vx-glow`, `vx-breathe`, `vx-float`, `vx-spin` e pulsos de ícone.
- Costuras onduladas (`Seam`) entre faixas e sombras difusas coloridas (`--shadow-ember`).
- Ícones abstratos (vórtice, nó, campo) nos cabeçalhos de seção.

## O que entra

**Estrutura.** Grade editorial visível: colunas com filetes verticais finos, cabeçalhos alinhados por baseline, rótulos em mono caixa-alta. Transição entre faixas por linha reta hairline, não por curva.

**Cor.** Base institucional: fundo escuro grafite frio e faixa clara gelo já existentes, mas com o ember/clay reduzido a acento pontual (filete, seta de link, estado ativo). Nada de gradientes de cor quente ao fundo.

**Sombras.** Trocar sombras difusas e coloridas por separação estrutural: borda 1px + sombra neutra muito curta (elevação de 2–4px). Cards deixam de flutuar.

**Tipografia.** Serifada apenas nos títulos (mantendo Fraunces), corpo em Manrope com medida de linha mais larga e hierarquia mais rígida (título / linha de apoio / corpo). Sem itálico decorativo no wordmark: "VórticeLab" em peso único.

**Movimento.** Só entrada: fade + deslocamento vertical de 12px, em cascata curta. Nenhuma animação em loop. Barra de progresso mantida, em tom neutro.

**Prova de autoridade.** Onde hoje há ornamento vazio, entram elementos institucionais montados com o texto já existente: uma faixa de números/indicadores em grade, e as três frentes (Atuação, Metodologia, Editorial) como uma tabela de três colunas com filete separador, em vez de cartões com brilho.

## Layout de /pagina2

```text
Cabeçalho fixo    marca + navegação em texto (sem chips)
Abertura          título grande, linha de apoio, CTA, nota de atendimento
                  faixa hairline
Equilíbrio        duas colunas: rótulo à esquerda, texto à direita
Citação           faixa clara, texto centrado, sem campo gráfico
Frentes           tabela de 3 colunas com filete, link "Acessar"
Etapas            lista numerada em grade, filete entre linhas
Citação           faixa escura sóbria
Contato           bloco em duas colunas: texto + WhatsApp/e-mail
Rodapé            filete + marca + linha legal
```

## Notas técnicas

- Nova rota `src/routes/pagina2.tsx` com `head()` próprio (título e descrição distintos).
- Novos componentes em `src/components/vortice/institutional.tsx` (Band, Rule, ColumnHead, DataRow, FrentesTable) — a home atual não é alterada.
- Tokens novos em `src/styles.css` sob um escopo `.theme-inst` (`--shadow-flat`, `--rule`, espaçamentos), sem tocar nos tokens existentes.
- Textos reaproveitados de `src/content/frentes.ts` e das seções atuais, sem reescrita.
- Home (`/`) permanece intacta para comparação.
