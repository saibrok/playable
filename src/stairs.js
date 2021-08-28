import anime from "animejs/lib/anime.es.js";

const app = window.app;

console.log(app);

app.stage.on("loaded", () => {
  start();
});

function start() {
  anime({
    targets: app.objects.hammer,
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800,
  });

  app.objects.hammer.on("pointerdown", onClickHammer(app.objects.hammer));
  app.objects.btnOk01.on("pointerdown", onClickOk);
  app.objects.btnOk02.on("pointerdown", onClickOk);
  app.objects.btnOk03.on("pointerdown", onClickOk);

  let direction = 1;

  app.objects.gsBtn.pivot.set(
    app.objects.gsBtn.width / 2,
    app.objects.gsBtn.height / 2
  );
  app.objects.gsBtn.x += app.objects.gsBtn.width / 2;
  app.objects.gsBtn.y += app.objects.gsBtn.height / 2;

  app.ticker.add((delta) => {
    if (app.objects.gsBtn.scale.x < 0.95) {
      direction = 1;
    } else if (app.objects.gsBtn.scale.x > 1.05) {
      direction = -1;
    }

    app.objects.gsBtn.scale.x += 0.002 * delta * direction;
    app.objects.gsBtn.scale.y += 0.002 * delta * direction;
  });
}

function onClickHammer() {
  return () => {
    app.objects.hammer.visible = false;

    const ms = 300;

    setTimeout(() => {
      appearance(app.objects.circle01, ms / 16, 67);
      appearance(app.objects.carpet01, ms / 16, 67);
    }, 0);

    setTimeout(() => {
      appearance(app.objects.circle02, ms / 16, 67);
      appearance(app.objects.carpet02, ms / 16, 67);
    }, 200);

    setTimeout(() => {
      appearance(app.objects.circle03, ms / 16, 67);
      appearance(app.objects.carpet03, ms / 16, 67);
    }, 400);

    app.objects.circle01.on(
      "pointerdown",
      onClickCarpet(
        app.objects.choosed01,
        app.objects.btnOk01,
        app.objects.newStairs01
      )
    );
    app.objects.circle02.on(
      "pointerdown",
      onClickCarpet(
        app.objects.choosed02,
        app.objects.btnOk02,
        app.objects.newStairs02
      )
    );
    app.objects.circle03.on(
      "pointerdown",
      onClickCarpet(
        app.objects.choosed03,
        app.objects.btnOk03,
        app.objects.newStairs03
      )
    );
  };
}

function onClickCarpet(choosed, btn, stairs) {
  return () => {
    app.objects.oldStairs.visible = false;
    app.objects.newStairs01.visible = false;
    app.objects.newStairs02.visible = false;
    app.objects.newStairs03.visible = false;

    app.objects.choosed01.visible = false;
    app.objects.choosed02.visible = false;
    app.objects.choosed03.visible = false;

    app.objects.btnOk01.visible = false;
    app.objects.btnOk02.visible = false;
    app.objects.btnOk03.visible = false;

    choosed.visible = true;
    choosed.alpha = 0;
    btn.visible = true;
    btn.alpha = 0;
    stairs.visible = true;

    requestAnimationFrame(update);

    function update() {
      choosed.alpha += 0.02;
      btn.alpha += 0.02;

      if (choosed.alpha < 1) {
        requestAnimationFrame(update);
      }
    }
  };
}

function onClickOk() {
  app.objects.circle01.visible = false;
  app.objects.circle02.visible = false;
  app.objects.circle03.visible = false;

  app.objects.carpet01.visible = false;
  app.objects.carpet02.visible = false;
  app.objects.carpet03.visible = false;

  app.objects.choosed01.visible = false;
  app.objects.choosed02.visible = false;
  app.objects.choosed03.visible = false;

  app.objects.btnOk01.visible = false;
  app.objects.btnOk02.visible = false;
  app.objects.btnOk03.visible = false;

  setTimeout(() => {
    app.objects.overlay.visible = true;
    app.objects.continueBanner.visible = true;
  }, 1000);
}

/////////////////////////
function appearance(object, frames = 20) {
  object.pivot.set(object.width / 2, object.height / 2);
  object.x += object.width / 2;
  object.y += object.height / 2;

  object.scale.x = 0.75;
  object.scale.y = 0.75;

  object.alpha = 0;
  object.visible = true;

  requestAnimationFrame(update);
  function update() {
    object.alpha += 1 / frames;
    object.scale.x += 0.25 / frames;
    object.scale.y += 0.25 / frames;

    if (object.alpha < 1) {
      requestAnimationFrame(update);
    }
  }
}

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
