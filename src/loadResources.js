const app = window.app;
app.loader = new PIXI.Loader();

import { displayResources } from "./displayResources";

const container = new PIXI.Container();
container.sortableChildren = true;
app.stage.addChild(container);

app.loader
  .add("decorations", "./src/images/sprites/decorations.json")
  .add("stairs", "./src/images/sprites/stairs.json")
  .add("carpets", "./src/images/sprites/carpets.json")
  .add("buttons", "./src/images/sprites/buttons.json")
  .add("background", "./src/images/background.png")
  .add("austin", "./src/images/Austin.png")
  .add("overlay", "./src/images/overlay.png")
  .add("continueBanner", "./src/images/continue_banner.png")
  .load(() => {
    app.objects = displayResources(container);
    app.stage.emit("loaded");
  });
