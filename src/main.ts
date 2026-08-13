import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./styles/main.scss";

window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  window.location.reload();
});

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
