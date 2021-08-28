class InteriorItem extends PIXI.Container {
  constructor({ resource, settings = {}, id }) {

    console.log(resource);
    console.log(settings);
    console.log(id);
    super();

    this.resource = resource;

    if (id) {
      this.sprite = new PIXI.Sprite(resource.textures[id]);
    } else {
      this.sprite = new PIXI.Sprite(resource.texture);
    }

    this.sprite.x = settings?.x || 0;
    this.sprite.y = settings?.y || 0;
    this.sprite.zIndex = settings?.zIndex || 0;
    // this.sprite.alpha = 0.5;

    if (settings.hasOwnProperty("visible")) {
      this.sprite.visible = settings.visible;
    }

    if (settings.hasOwnProperty("anchor")) {
      this.sprite.anchor.set(settings.anchor);
    }

    this.addChild(this.sprite);
  }
}

export { InteriorItem };
