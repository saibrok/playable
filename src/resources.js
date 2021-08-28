const app = window.app;
app.loader = new PIXI.Loader();

const container = new PIXI.Container();
container.sortableChildren = true;
app.stage.addChild(container);

const overlayTexture = PIXI.Texture.from("./src/images/layer-3.png");
const overlay = new PIXI.Sprite(overlayTexture);
overlay.zIndex = 100;
overlay.visible = false;
container.addChild(overlay);

const continueBannerTexture = PIXI.Texture.from("./src/images/layer-2.png");
const continueBanner = new PIXI.Sprite(continueBannerTexture);
continueBanner.anchor.set(0.5);
continueBanner.zIndex = 101;
continueBanner.x = app.screen.width / 2;
continueBanner.y = app.screen.height / 2;
continueBanner.visible = false;
container.addChild(continueBanner);

app.loader
  .add("decorations", "./src/images/sprites/decorations.json")
  .add("stairs", "./src/images/sprites/stairs.json")
  .add("carpets", "./src/images/sprites/carpets.json")
  .add("buttons", "./src/images/sprites/buttons.json")
  .add("background", "./src/images/background.png")
  .add("austin", "./src/images/Austin.png")
  .load(startApp);

let glob_choosed1;
let glob_choosed2;
let glob_choosed3;

function startApp() {
  const {
    oldStair,
    newStair01,
    newStair02,
    newStair03,
    circle1,
    circle2,
    circle3,
    choosed1,
    choosed2,
    choosed3,
    carpet01,
    carpet02,
    carpet03,
  } = loadResources(container);

  glob_choosed1 = choosed1;
  glob_choosed2 = choosed2;
  glob_choosed3 = choosed3;

  circle1.interactive = true;
  circle2.interactive = true;
  circle3.interactive = true;
  circle1.buttonMode = true;
  circle2.buttonMode = true;
  circle3.buttonMode = true;
  circle1.on("pointerdown", onClick(choosed1));
  circle2.on("pointerdown", onClick(choosed2));
  circle3.on("pointerdown", onClick(choosed3));
}

function onClick(sprite) {
  return () => {
    glob_choosed1.visible = false;
    glob_choosed2.visible = false;
    glob_choosed3.visible = false;
    sprite.visible = true;
  };
}

export function loadResources(container) {
  let sprite, id;
  //** background */

  sprite = app.loader.resources["background"].texture;
  let background = new PIXI.Sprite(sprite);
  container.addChild(background);

  //** austin */

  sprite = app.loader.resources["austin"].texture;
  let austin = new PIXI.Sprite(sprite);
  austin.x = 696;
  austin.y = 113;
  container.addChild(austin);

  //** decorations */

  id = app.loader.resources["decorations"].textures;

  let bookStand = new PIXI.Sprite(id["book_stand.png"]);
  bookStand.x = 834;
  container.addChild(bookStand);

  let globe = new PIXI.Sprite(id["globe.png"]);
  globe.x = 87;
  globe.y = 109;
  container.addChild(globe);

  let plant01 = new PIXI.Sprite(id["plant_01.png"]);
  plant01.x = 456;
  container.addChild(plant01);

  let plant02 = new PIXI.Sprite(id["plant_02.png"]);
  plant02.x = 1135;
  plant02.y = 164;
  container.addChild(plant02);

  let plant03 = new PIXI.Sprite(id["plant_03.png"]);
  plant03.x = 1122;
  plant03.y = 438;
  plant03.zIndex = 10;
  container.addChild(plant03);

  let sofa = new PIXI.Sprite(id["sofa.png"]);
  sofa.x = 127;
  sofa.y = 324;
  container.addChild(sofa);

  let table = new PIXI.Sprite(id["table.png"]);
  table.x = 202;
  table.y = 196;
  container.addChild(table);

  //** stairs */

  id = app.loader.resources["stairs"].textures;

  let oldStair = new PIXI.Sprite(id["old_stair.png"]);
  oldStair.x = 833;
  oldStair.y = 54;
  container.addChild(oldStair);

  let newStair01 = new PIXI.Sprite(id["new_stair_01.png"]);
  newStair01.x = 908;
  newStair01.y = 18;
  newStair01.visible = false;
  container.addChild(newStair01);

  let newStair02 = new PIXI.Sprite(id["new_stair_02.png"]);
  newStair02.x = 898;
  newStair02.y = 28;
  newStair02.visible = false;
  container.addChild(newStair02);

  let newStair03 = new PIXI.Sprite(id["new_stair_03.png"]);
  newStair03.x = 910;
  newStair03.y = -13;
  newStair03.visible = false;
  container.addChild(newStair03);

  //** buttons */

  id = app.loader.resources["buttons"].textures;

  /*
      btn_ok.png
      gs_btn.png
      hammer.png
      logo.png
      circle.png
     */

  let circle1 = new PIXI.Sprite(id["circle.png"]);
  circle1.x = 841;
  circle1.y = 6;
  container.addChild(circle1);
  let circle2 = new PIXI.Sprite(id["circle.png"]);
  circle2.x = 970;
  circle2.y = 6;
  container.addChild(circle2);
  let circle3 = new PIXI.Sprite(id["circle.png"]);
  circle3.x = 1098;
  circle3.y = 6;
  container.addChild(circle3);

  let choosed1 = new PIXI.Sprite(id["choosed.png"]);
  choosed1.x = 850;
  choosed1.y = 11;
  choosed1.visible = false;
  container.addChild(choosed1);
  let choosed2 = new PIXI.Sprite(id["choosed.png"]);
  choosed2.x = 979;
  choosed2.y = 11;
  choosed2.visible = false;
  container.addChild(choosed2);
  let choosed3 = new PIXI.Sprite(id["choosed.png"]);
  choosed3.x = 1107;
  choosed3.y = 11;
  choosed3.visible = false;
  container.addChild(choosed3);

  //** carpets */

  id = app.loader.resources["carpets"].textures;

  let carpet01 = new PIXI.Sprite(id["carpet_01.png"]);
  carpet01.x = 869;
  carpet01.y = 12;
  container.addChild(carpet01);

  let carpet02 = new PIXI.Sprite(id["carpet_02.png"]);
  carpet02.x = 1000;
  carpet02.y = 10;
  container.addChild(carpet02);

  let carpet03 = new PIXI.Sprite(id["carpet_03.png"]);
  carpet03.x = 1124;
  carpet03.y = 10;
  container.addChild(carpet03);

  return {
    oldStair,
    newStair01,
    newStair02,
    newStair03,
    circle1,
    circle2,
    circle3,
    choosed1,
    choosed2,
    choosed3,
    carpet01,
    carpet02,
    carpet03,
  };
}
