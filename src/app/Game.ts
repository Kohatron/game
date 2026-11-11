import { Application } from "pixi.js";
import { GAME_CONFIG } from "../config/gameConfig";
import { BootScene } from "../scenes/BootScene";

export class Game {
  private readonly app = new Application();

  constructor(private readonly root: HTMLElement) {}

  async start(): Promise<void> {
    await this.app.init({
      background: GAME_CONFIG.backgroundColor,
      antialias: true,
      resizeTo: this.root,
    });

    this.app.canvas.setAttribute("aria-label", "Jogo Kohatron");
    this.root.appendChild(this.app.canvas);

    const scene = new BootScene();
    this.app.stage.addChild(scene.container);
    this.app.renderer.on("resize", (width: number, height: number) => {
      scene.resize(width, height);
    });
    scene.resize(this.app.screen.width, this.app.screen.height);
  }
}
