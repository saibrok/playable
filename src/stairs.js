import anime from "animejs/lib/anime.es.js";

const app = window.app;

app.stage.on("loaded", () => {
  start();
});

function start() {
  app.objects.logo.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.logo, "left", 100, 200, 5);
  }, 1100);

  app.objects.hammer.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.hammer, "down", 100, 200, 5);
  }, 1300);

  app.objects.bookStand.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.bookStand, "down", 100, 200, 5);
  }, 300);

  app.objects.globe.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.globe, "down", 100, 200, 5);
  }, 400);

  app.objects.plant01.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.plant01, "down", 100, 200, 5);
  }, 500);

  app.objects.plant02.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.plant02, "down", 100, 200, 5);
  }, 600);

  app.objects.plant03.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.plant03, "down", 100, 200, 5);
  }, 700);

  app.objects.sofa.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.sofa, "down", 100, 200, 5);
  }, 800);

  app.objects.table.alpha = 0;
  setTimeout(() => {
    quadAppearance(app.objects.table, "down", 100, 200, 5);
  }, 900);

  console.log(app.objects.gsBtn.y);
  const cur = app.objects.gsBtn.y;

  app.objects.gsBtn.y += 400;

  anime({
    targets: app.objects.gsBtn,
    y: cur,
    easing: 'spring(1, 80, 10, 0)',
    duration: 800,
  });

  pulse(app.objects.hammer);
  setTimeout(() => {
    pulse(app.objects.gsBtn);
  }, 850);

  app.objects.hammer.on("pointerdown", onClickHammer(app.objects.hammer));
  app.objects.btnOk01.on("pointerdown", onClickOk);
  app.objects.btnOk02.on("pointerdown", onClickOk);
  app.objects.btnOk03.on("pointerdown", onClickOk);
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

    quadAppearance(stairs, "down", 100, 500, 4);
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

  app.objects.overlay.alpha = 0;
  app.objects.continueBanner.alpha = 0;

  setTimeout(() => {
    app.objects.overlay.visible = true;
    app.objects.continueBanner.visible = true;
    app.objects.continueBanner.scale.x = 0.5;
    app.objects.continueBanner.scale.y = 0.5;

    anime({
      targets: app.objects.overlay,
      alpha: 1,
      easing: "linear",
      duration: 300,
    });

    anime({
      targets: app.objects.continueBanner,
      alpha: 1,
      easing: "linear",
      duration: 800,
    });

    anime({
      targets: app.objects.continueBanner.scale,
      x: 1,
      y: 1,
      easing: "easeOutBounce",
      duration: 800,
    });
  }, 1000);
}

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

/**
 * Анимация появления по параболической кривой
 * @param {Object} object DisplayObject
 * @param {string} direction направление появления
 * @param {number} distance расстояние появления
 * @param {number} time время появления
 * @param {number} speed скорость
 */

function quadAppearance(object, direction, distance, time, speed) {
  const directionOptions = {
    up: { coordinate: "y", vector: 1 },
    down: { coordinate: "y", vector: -1 },
    left: { coordinate: "x", vector: 1 },
    right: { coordinate: "x", vector: -1 },
  };
  const startPosition =
    object[directionOptions[direction].coordinate] +
    distance * directionOptions[direction].vector;

  function quad(timeFraction) {
    return Math.pow(timeFraction, speed);
  }

  let quadEaseOut = makeEaseOut(quad);

  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }

  animate({
    duration: time,
    timing: quadEaseOut,
    draw: function (progress) {
      object[directionOptions[direction].coordinate] =
        startPosition -
        distance * directionOptions[direction].vector * progress;
      object.alpha = 1 * progress;
    },
  });

  function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      }

      let progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
}

function pulse(object) {
  let direction = 1;

  app.ticker.add((delta) => {
    if (object.scale.x < 0.95) {
      direction = 1;
    } else if (object.scale.x > 1.05) {
      direction = -1;
    }

    object.scale.x += 0.002 * delta * direction;
    object.scale.y += 0.002 * delta * direction;
  });
}
