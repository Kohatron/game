import { Container, Graphics, Text, TextStyle } from "pixi.js";
import { GAME_CONFIG } from "../config/gameConfig";

export class BootScene {
  readonly container = new Container();

  private readonly title = new Text({
    text: "KOHATRON",
    style: new TextStyle({
      fill: "#f4f7fb",
      fontFamily: "Arial, sans-serif",
      fontSize: 44,
      fontWeight: "bold",
      letterSpacing: 8,
    }),
  });

  private readonly subtitle = new Text({
    text: "Sua próxima aventura começa aqui",
    style: new TextStyle({
      fill: "#a6b0c2",
      fontFamily: "Arial, sans-serif",
      fontSize: 16,
    }),
  });

  private readonly accent = new Graphics();

  constructor() {
    this.title.anchor.set(0.5);
    this.subtitle.anchor.set(0.5);
    this.accent
      .roundRect(-36, -3, 72, 6, 3)
      .fill(GAME_CONFIG.accentColor);

    this.container.addChild(this.accent, this.title, this.subtitle);
  }

  resize(width: number, height: number): void {
    this.title.position.set(width / 2, height / 2 - 30);
    this.accent.position.set(width / 2, height / 2 + 12);
    this.subtitle.position.set(width / 2, height / 2 + 48);
  }
}
