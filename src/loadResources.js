app.loader = new PIXI.Loader();

import { displayResources } from "./displayResources";

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
    app.objects = displayResources();
    app.stage.emit("loaded");
  });

const frame = new PIXI.Graphics();
const loadStatus = new PIXI.Graphics();

frame.lineStyle(7, 0xf0d5b0, 1);
frame.drawRoundedRect(
  50,
  app.screen.height / 2 - 50,
  app.screen.width - 100,
  100,
  5
);

frame.lineStyle(3, 0x2d490a, 1);
frame.drawRoundedRect(
  52,
  app.screen.height / 2 - 48,
  app.screen.width - 104,
  96,
  5
);

app.stage.addChild(frame);

loadStatus.lineStyle(0, 0xa7f625, 1);
loadStatus.beginFill(0xa7f625, 1);
loadStatus.drawRoundedRect(
  54,
  app.screen.height / 2 - 46,
  20,
  92,
  5
);

loadStatus.endFill();

app.stage.addChild(loadStatus);

let loadedResourcesCount = 0;
const loadStatusWidthTotal = app.screen.width - 107;

app.loader.onLoad.add((event) => {
  loadedResourcesCount += 1;

  loadStatus.clear();
  loadStatus.lineStyle(0, 0xa7f625, 1);
  loadStatus.beginFill(0xa7f625, 1);
  loadStatus.drawRoundedRect(
    53,
    app.screen.height / 2 - 47,
    Math.ceil(
      (loadStatusWidthTotal / Object.keys(event.resources).length) *
        loadedResourcesCount
    ),
    94,
    5
  );

  if(loadedResourcesCount >= Object.keys(event.resources).length) {
    loadStatus.clear();
    frame.clear();
  }
});
