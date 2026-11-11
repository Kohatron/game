# Kohatron — Game

Base para um jogo HTML5 feito com Node.js, PixiJS, TypeScript e Vite.

Este guia explica como preparar o ambiente no Windows, executar o projeto e
entender os arquivos gerados para publicação.

## 1. Instale o Node.js no Windows

O Node.js permite executar as ferramentas usadas pelo projeto. A instalação
também inclui o npm, que baixa e organiza essas ferramentas.

1. Acesse [nodejs.org](https://nodejs.org/).
2. Baixe a versão **LTS** para Windows e execute o instalador `.msi`.
3. Durante a instalação, você pode manter as opções padrão. Confirme que a
   opção para adicionar o Node.js ao `PATH` está habilitada.
4. Ao terminar, feche e abra novamente o terminal. Se estiver usando o VS Code,
   abra um terminal novo em **Terminal > Novo Terminal**.
5. Confira se os dois comandos estão disponíveis:

   ```powershell
   node -v
   npm -v
   ```

   O projeto requer Node.js **20.19 ou mais recente da linha 20**, ou **22.12
   ou mais recente**. Se a versão exibida for mais antiga, instale uma versão
   LTS que atenda a esse requisito.

## 2. Abra o projeto e instale as dependências

Abra o PowerShell ou o terminal integrado do VS Code e navegue até a pasta do
projeto. Troque o exemplo abaixo pelo caminho onde você salvou o projeto:

```powershell
cd "C:\caminho\para\game"
```

O terminal precisa estar na pasta que contém o arquivo `package.json`. Para
conferir, execute:

```powershell
dir
```

Na primeira vez, instale as dependências:

```powershell
npm install
```

Esse comando baixa as bibliotecas do projeto, incluindo PixiJS e Vite, para a
pasta `node_modules`. A instalação pode levar alguns minutos e normalmente só
precisa ser feita novamente quando as dependências do projeto mudarem.

## 3. Execute durante o desenvolvimento

Inicie o servidor local:

```powershell
npm run dev
```

O terminal mostrará um endereço local, geralmente
`http://localhost:5173/`. Abra esse endereço no navegador para ver o jogo. Deixe
o terminal aberto enquanto trabalha; para encerrar o servidor, volte ao
terminal e pressione `Ctrl+C`.

Esse modo é voltado ao desenvolvimento e não cria a versão final para
publicação.

## 4. Gere e confira a versão de produção

Para verificar o TypeScript e criar os arquivos prontos para publicação,
execute:

```powershell
npm run build
```

Se o comando terminar sem erros, o Vite cria a pasta `dist` na raiz do projeto.
Ela contém os arquivos estáticos finais do jogo, como HTML, JavaScript, CSS e
recursos necessários para o navegador. A pasta é gerada pelo build: não edite
seu conteúdo manualmente. Se precisar recriá-la, rode `npm run build` outra
vez.

Para testar localmente essa versão gerada, execute:

```powershell
npm run preview
```

Abra no navegador o endereço informado pelo terminal. O preview serve a pasta
`dist` no seu computador para conferência; ele não publica o jogo na internet.
Para publicar, envie o **conteúdo da pasta `dist`** para um serviço de
hospedagem de sites estáticos. Não é necessário enviar `node_modules` ou o
código-fonte para esse tipo de hospedagem.

A pasta `dist` está ignorada pelo Git e não precisa ser incluída no repositório:
cada pessoa ou serviço de publicação pode gerá-la executando o build.

## Comandos úteis

| Comando | Para que serve |
| --- | --- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica o TypeScript e gera a versão de produção em `dist`. |
| `npm run preview` | Abre uma prévia local da versão gerada em `dist`. |

## Estrutura do projeto

- `src/app`: inicialização e ciclo de vida do jogo.
- `src/scenes`: cenas e telas do jogo.
- `src/entities`: entidades do jogo.
- `src/systems`: regras e sistemas compartilhados.
- `src/config`: configurações e constantes.
- `src/assets`: ponto de entrada para imagens, áudio e outros recursos.
- `src/styles`: estilos globais da página.

Adicione arquivos às pastas `entities`, `systems` e `assets` conforme o jogo
ganhar funcionalidades.

## Problemas comuns

- **`node` ou `npm` não é reconhecido:** feche e abra o terminal para atualizar
  o `PATH`. Se continuar, execute novamente o instalador do Node.js e confirme
  que a opção de adicionar ao `PATH` está habilitada.
- **O comando foi executado na pasta errada:** use `cd` para entrar na pasta
  que contém `package.json` e tente novamente.
- **A pasta `dist` não existe:** execute `npm run build`. O comando
  `npm run preview` precisa que o build já tenha sido feito.
