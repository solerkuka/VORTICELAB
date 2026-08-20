# Menu de navegação: mobile com ícone "hambúrguer" e desktop refinado

Hoje as três palavras (ATUAÇÃO, METODOLOGIA, EDITORIAL) aparecem como chips empilhados logo abaixo da marca, ocupando espaço da primeira dobra no mobile e ficando visualmente pesadas no desktop.

## Mobile

- Cabeçalho passa a ter uma linha só: logo + "VórticeLab" à esquerda, e à direita o botão de menu (os "risquinhos" = ícone hambúrguer, três traços).
- Ao tocar, abre um painel deslizante em tela cheia sobre o fundo escuro com:
  - as três frentes em tipografia grande (display, itálico), uma por linha, com o subtítulo curto de cada uma;
  - separadores finos entre elas;
  - "Fale conosco" destacado ao final;
  - botão de fechar (X) no mesmo lugar do hambúrguer.
- Abertura/fechamento com animação suave (fade + leve deslize), trava o scroll da página enquanto aberto, fecha ao tocar em qualquer link ou com a tecla Esc.
- Ganho: a primeira dobra fica mais limpa e o título/CTA sobem.

## Desktop

- Barra em três zonas alinhadas na mesma linha: marca à esquerda, links ao centro, "Fale conosco" à direita (hoje a marca fica centralizada e o CTA absoluto).
- Os chips arredondados dão lugar a links em texto mono maiúsculo, com um filete inferior em Clay que cresce no hover e um ponto Clay antes do rótulo — mantém o acento sem o peso do "botão".
- "Fale conosco" continua como pílula contornada, virando sólido Clay/Ember no hover.
- Espaçamento vertical do cabeçalho levemente reduzido para dar respiro ao herói.

## Detalhes técnicos

- Alterações concentradas em `src/components/vortice/sections.tsx` (componente `Hero`, bloco `<nav>`); novo componente `MobileMenu` em `src/components/vortice/nav.tsx`.
- Links continuam vindo de `FRENTES` (`src/content/frentes.ts`) — nada de texto novo inventado.
- Ícone hambúrguer/X desenhado em SVG inline (traços com animação), sem nova dependência.
- Cores apenas via tokens existentes (`clay`, `bone`, `ink`, `ember`) de `src/styles.css`.
- Acessibilidade: `aria-expanded`, `aria-controls`, foco visível e `aria-label` no botão.
