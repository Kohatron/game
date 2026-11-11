# Kohatron — Game

Base para um jogo HTML5 usando Node.js, PixiJS, TypeScript e Vite.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/app`: inicialização e ciclo de vida do jogo.
- `src/scenes`: cenas e telas do jogo.
- `src/entities`: entidades do jogo.
- `src/systems`: regras e sistemas compartilhados.
- `src/config`: configurações e constantes.
- `src/assets`: ponto de entrada para imagens, áudio e outros recursos.
- `src/styles`: estilos globais da página.

Adicione arquivos às pastas `entities`, `systems` e `assets` conforme o jogo
ganhar funcionalidades.
