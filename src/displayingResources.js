const app = window.app;

class VisualModels {
  constructor() {
    app.stage.on("loaded", () => {
      this.createObjects();
    });
  }

  createObjects() {
    const sprites = app.loader.resources.sprites.textures;
    Object.assign(this, {
      buildings: [
        {
          texture: sprites["buildingTiles_010.png"],
          pivot: { x: 65, y: 59 },
        },
        {
          texture: sprites["buildingTiles_018.png"],
          pivot: { x: 65, y: 59 },
        },
        {
          texture: sprites["buildingTiles_026.png"],
          pivot: { x: 65, y: 59 },
        },
      ],
    });
  }
}

app.visual = new VisualModels();
