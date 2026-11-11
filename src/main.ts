import { Game } from "./app/Game";
import "./styles/main.css";

const gameRoot = document.querySelector<HTMLElement>("#game");

if (!gameRoot) {
  throw new Error('Elemento raiz do jogo "#game" não foi encontrado.');
}

const game = new Game(gameRoot);
void game.start().catch((error: unknown) => {
  console.error("Não foi possível iniciar o jogo.", error);
});
