export function displayResources(container) {
  /* background */

  let background = new PIXI.Sprite(app.loader.resources["background"].texture);
  container.addChild(background);

  let overlay = new PIXI.Sprite(app.loader.resources["overlay"].texture);
  overlay.zIndex = 100;
  overlay.visible = false;
  container.addChild(overlay);

  let continueBanner = new PIXI.Sprite(
    app.loader.resources["continueBanner"].texture
  );
  continueBanner.anchor.set(0.5);
  continueBanner.zIndex = 101;
  continueBanner.x = app.screen.width / 2;
  continueBanner.y = app.screen.height / 2 - 50;
  continueBanner.visible = false;
  container.addChild(continueBanner);

  /* austin */

  let austin = new PIXI.Sprite(app.loader.resources["austin"].texture);
  austin.x = 696;
  austin.y = 113;
  container.addChild(austin);

  /* decorations */

  const decorations = app.loader.resources["decorations"].textures;

  let bookStand = new PIXI.Sprite(decorations["book_stand"]);
  bookStand.x = 834;
  container.addChild(bookStand);

  let globe = new PIXI.Sprite(decorations["globe"]);
  globe.x = 87;
  globe.y = 109;
  container.addChild(globe);

  let plant01 = new PIXI.Sprite(decorations["plant_01"]);
  plant01.x = 456;
  container.addChild(plant01);

  let plant02 = new PIXI.Sprite(decorations["plant_02"]);
  plant02.x = 1135;
  plant02.y = 164;
  container.addChild(plant02);

  let plant03 = new PIXI.Sprite(decorations["plant_03"]);
  plant03.x = 1122;
  plant03.y = 438;
  plant03.zIndex = 10;
  container.addChild(plant03);

  let sofa = new PIXI.Sprite(decorations["sofa"]);
  sofa.x = 127;
  sofa.y = 324;
  container.addChild(sofa);

  let table = new PIXI.Sprite(decorations["table"]);
  table.x = 202;
  table.y = 196;
  container.addChild(table);

  /* stairs */

  const stairs = app.loader.resources["stairs"].textures;

  let oldStairs = new PIXI.Sprite(stairs["old_stairs"]);
  oldStairs.x = 833;
  oldStairs.y = 124;
  container.addChild(oldStairs);

  let newStairs01 = new PIXI.Sprite(stairs["new_stairs_01"]);
  newStairs01.x = 910;
  newStairs01.y = 18;
  newStairs01.visible = false;
  container.addChild(newStairs01);

  let newStairs02 = new PIXI.Sprite(stairs["new_stairs_02"]);
  newStairs02.x = 900;
  newStairs02.y = 28;
  newStairs02.visible = false;
  container.addChild(newStairs02);

  let newStairs03 = new PIXI.Sprite(stairs["new_stairs_03"]);
  newStairs03.x = 910;
  newStairs03.y = 25;
  newStairs03.visible = false;
  container.addChild(newStairs03);

  /* buttons */

  const buttons = app.loader.resources["buttons"].textures;

  let gsBtn = new PIXI.Sprite(buttons["gs_btn"]);
  gsBtn.x = 502;
  gsBtn.y = 499;
  gsBtn.interactive = true;
  gsBtn.buttonMode = true;
  gsBtn.zIndex = 101;
  gsBtn.anchor.set(0.5);
  gsBtn.x += gsBtn.width / 2;
  gsBtn.y += gsBtn.height / 2;
  container.addChild(gsBtn);

  let logo = new PIXI.Sprite(buttons["logo"]);
  logo.x = 32;
  logo.y = 5;
  logo.zIndex = 101;
  container.addChild(logo);

  let hammer = new PIXI.Sprite(buttons["hammer"]);
  hammer.x = 1087;
  hammer.y = 258;
  hammer.interactive = true;
  hammer.buttonMode = true;
  hammer.anchor.set(0.5);
  hammer.x += hammer.width / 2;
  hammer.y += hammer.height / 2;
  container.addChild(hammer);

  let circle01 = new PIXI.Sprite(buttons["circle"]);
  circle01.x = 841;
  circle01.y = 6;
  circle01.interactive = true;
  circle01.buttonMode = true;
  circle01.visible = false;
  container.addChild(circle01);

  let circle02 = new PIXI.Sprite(buttons["circle"]);
  circle02.x = 970;
  circle02.y = 6;
  circle02.interactive = true;
  circle02.buttonMode = true;
  circle02.visible = false;
  container.addChild(circle02);

  let circle03 = new PIXI.Sprite(buttons["circle"]);
  circle03.x = 1098;
  circle03.y = 6;
  circle03.interactive = true;
  circle03.buttonMode = true;
  circle03.visible = false;
  container.addChild(circle03);

  let choosed01 = new PIXI.Sprite(buttons["choosed"]);
  choosed01.x = 850;
  choosed01.y = 11;
  choosed01.visible = false;
  container.addChild(choosed01);

  let choosed02 = new PIXI.Sprite(buttons["choosed"]);
  choosed02.x = 979;
  choosed02.y = 11;
  choosed02.visible = false;
  container.addChild(choosed02);

  let choosed03 = new PIXI.Sprite(buttons["choosed"]);
  choosed03.x = 1107;
  choosed03.y = 11;
  choosed03.visible = false;
  container.addChild(choosed03);

  let btnOk01 = new PIXI.Sprite(buttons["btn_ok"]);
  btnOk01.x = 832;
  btnOk01.y = 117;
  btnOk01.zIndex = 10;
  btnOk01.interactive = true;
  btnOk01.buttonMode = true;
  btnOk01.visible = false;
  container.addChild(btnOk01);

  let btnOk02 = new PIXI.Sprite(buttons["btn_ok"]);
  btnOk02.x = 961;
  btnOk02.y = 117;
  btnOk02.zIndex = 10;
  btnOk02.interactive = true;
  btnOk02.buttonMode = true;
  btnOk02.visible = false;
  container.addChild(btnOk02);

  let btnOk03 = new PIXI.Sprite(buttons["btn_ok"]);
  btnOk03.x = 1089;
  btnOk03.y = 117;
  btnOk03.zIndex = 10;
  btnOk03.interactive = true;
  btnOk03.buttonMode = true;
  btnOk03.visible = false;
  container.addChild(btnOk03);

  /* carpets */

  const carpets = app.loader.resources["carpets"].textures;

  let carpet01 = new PIXI.Sprite(carpets["carpet_01"]);
  carpet01.x = 869;
  carpet01.y = 12;
  carpet01.visible = false;
  container.addChild(carpet01);

  let carpet02 = new PIXI.Sprite(carpets["carpet_02"]);
  carpet02.x = 1000;
  carpet02.y = 10;
  carpet02.visible = false;
  container.addChild(carpet02);

  let carpet03 = new PIXI.Sprite(carpets["carpet_03"]);
  carpet03.x = 1124;
  carpet03.y = 10;
  carpet03.visible = false;
  container.addChild(carpet03);

  return {
    oldStairs,
    newStairs01,
    newStairs02,
    newStairs03,
    circle01,
    circle02,
    circle03,
    choosed01,
    choosed02,
    choosed03,
    carpet01,
    carpet02,
    carpet03,
    btnOk01,
    btnOk02,
    btnOk03,
    hammer,
    gsBtn,
    overlay,
    continueBanner,
    bookStand,
    globe,
    plant01,
    plant02,
    plant03,
    sofa,
    table,
    logo,
  };
}
