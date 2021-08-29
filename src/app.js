import * as PIXI from "pixi.js";
window.PIXI = PIXI;

const app = window.app = new PIXI.Application({
  width: 1390,
  height: 640,
  backgroundColor: 0x333333,
  antialias: true,
  resolution: 1,
});

function resize() {
  app.view.style.position = "absolute";
  app.view.style.width = window.innerWidth + "px";
  app.view.style.display = "block";
}

resize();
window.addEventListener("resize", resize);

document.body.appendChild(app.view);
