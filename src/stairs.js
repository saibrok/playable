const app = window.app;

console.log(app);

app.stage.on("loaded", () => {
  start();
});

function start() {
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

    setTimeout(() => {
      app.objects.circle01.y -= 100;
      app.objects.carpet01.y -= 100;

      app.objects.circle01.alpha = 0;
      app.objects.carpet01.alpha = 0;
      app.objects.circle01.visible = true;
      app.objects.carpet01.visible = true;

      const interval = setInterval(() => {
        app.objects.circle01.alpha += 0.02;
        app.objects.carpet01.alpha += 0.02;
        app.objects.circle01.y += 2;
        app.objects.carpet01.y += 2;
        if (app.objects.circle01.alpha > 1) {
          clearInterval(interval);
        }
      }, 0);
    }, 0);

    setTimeout(() => {
      app.objects.circle02.y -= 100;
      app.objects.carpet02.y -= 100;

      app.objects.circle02.alpha = 0;
      app.objects.carpet02.alpha = 0;
      app.objects.circle02.visible = true;
      app.objects.carpet02.visible = true;

      const interval = setInterval(() => {
        app.objects.circle02.alpha += 0.02;
        app.objects.carpet02.alpha += 0.02;
        app.objects.circle02.y += 2;
        app.objects.carpet02.y += 2;
        if (app.objects.circle02.alpha > 1) {
          clearInterval(interval);
        }
      }, 0);
    }, 200);

    setTimeout(() => {
      app.objects.circle03.y -= 100;
      app.objects.carpet03.y -= 100;

      app.objects.circle03.alpha = 0;
      app.objects.carpet03.alpha = 0;
      app.objects.circle03.visible = true;
      app.objects.carpet03.visible = true;

      const interval = setInterval(() => {
        app.objects.circle03.alpha += 0.02;
        app.objects.carpet03.alpha += 0.02;
        app.objects.circle03.y += 2;
        app.objects.carpet03.y += 2;
        if (app.objects.circle03.alpha > 1) {
          clearInterval(interval);
        }
      }, 0);
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

function onClickCarpet(sprite, btn, stairs) {
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

    stairs.visible = true;
    btn.visible = true;
    sprite.visible = true;
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

  app.objects.overlay.visible = true;
  app.objects.continueBanner.visible = true;
}
