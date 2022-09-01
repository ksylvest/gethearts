import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import pug from "lume/plugins/pug.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume();

site.copy("public", ".");

site.use({
  functions: {
    "/img/avatars": {
      "-small": { width: 100, height: 100 },
      "-medium": { width: 500, height: 500 },
      "-big": { width: 1000, height: 1000 },
    },
    "/img/pictures/*.jpg": {
      "-mobile": { width: 500, height: 500 },
      "-tablet": { width: 1000, height: 1000 },
      "-desktop": { width: 1500, height: 1500 },
    },
  },
});
site.use(pug());
site.use(svgo());

export default site;
