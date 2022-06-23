import { boot } from "quasar/wrappers";

// import anime from "animejs";
import anime from "animejs/lib/anime.es.js";

export default boot(({ app }) => {
  app.directive("anime", {
    bind: function bind(targets, binding) {
      console.warn("anime-bind", targets, binding);
      var opts = Object.assign({}, binding.value, { targets: targets });
      anime(opts);
    },
    update: function bind(targets, binding) {
      var opts = Object.assign({}, binding.value, { targets: targets });
      anime(opts);
    },
  });
  app.config.globalProperties.$anime = anime;
});
