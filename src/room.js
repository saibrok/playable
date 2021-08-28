import { InteriorItem } from "./entities/environment";
import { resources } from "./resources";

const app = window.app;

const container = new PIXI.Container();
container.sortableChildren = true;
app.stage.addChild(container);

app.interiorItems = [];

app.stage.on("loaded", () => {
  resources.forEach((resource) => {
    if (resource.images) {
      resource.images.forEach((image) => {
        const newItem = new InteriorItem({
          resource: app.loader.resources[resource.id],
          settings: image.settings,
          id: image.id,
        });

        app.interiorItems[image] = newItem;
        newItem.zIndex = resource?.settings?.zIndex
          ? resource.settings.zIndex
          : 0;
        container.addChild(newItem);
      });
    } else {
      const newItem = new InteriorItem({
        resource: app.loader.resources[resource.id],
        settings: resource.settings,
      });

      app.interiorItems[resource.id] = newItem;
      newItem.zIndex = resource?.settings?.zIndex
        ? resource.settings.zIndex
        : 0;
      container.addChild(newItem);
    }
  });
});

console.log(container);
