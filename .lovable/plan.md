# Marca em duas cores e símbolo com mais presença

## 1. Wordmark "VórticeLab" em dois tons
Seguindo o moodboard: "Vórtice" em bone (claro) com peso leve e "Lab" em ember (dourado) em itálico, como uma única unidade tipográfica ao lado do símbolo.

- Cabeçalho (mobile e desktop): mesma estrutura atual, só a cor/estilo muda — nada de novo texto ou layout.
- Rodapé: mesmo tratamento, em escala menor, para manter coerência.
- Em faixas claras a versão clara troca para ink + clay, preservando contraste.

## 2. Símbolo com contraste real
Hoje o PNG usa os traços fracos do moodboard (moss e bone com opacidade baixa) sobre fundo escuro, então some.

Ajustes propostos, do mais conservador ao mais visível:
- Regerar o PNG com o mesmo desenho, porém com os traços auxiliares mais claros e o traço principal em ember cheio (sem opacidade 0,5) e espessura levemente maior — o desenho não muda, só ganha densidade.
- Aumentar o tamanho no cabeçalho (de ~24px para ~30px no desktop e ~36px no mobile), dando peso de logo e não de ícone.
- Halo sutil atrás do símbolo (glow ember bem discreto) só nas faixas escuras, para descolar do fundo.

Isso não altera a identidade — é o mesmo símbolo extraído do arquivo, apenas legível.

## 3. Opcional (só se você quiser)
Uma assinatura maior da marca (símbolo grande + "Vórtice / Lab" empilhado, como na imagem enviada) poderia entrar na primeira dobra. Não está incluída aqui porque mexeria na hierarquia atual do hero.

## Notas técnicas
- Novo PNG transparente gerado a partir do mesmo script de espiral do moodboard, publicado como asset e substituindo `src/assets/vorticelab-logo.png.asset.json`; favicon atualizado junto.
- Alterações de marca em `src/components/vortice/sections.tsx` (Hero e Footer) e em `src/components/vortice/nav.tsx` se o menu mobile repetir o nome.
- Nenhum texto de conteúdo é alterado.
