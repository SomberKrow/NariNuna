import { createApp } from "vue";
import { attemptChunkRecovery, clearChunkRecovery } from "./utils/chunkRecovery";
import App from "./App.vue";
import { router } from "./router";
import "./styles/main.scss";

window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  try {
    if (attemptChunkRecovery(window.sessionStorage, window.location.pathname, () => window.location.reload())) return;
  } catch { /* Access to sessionStorage itself may be denied. */ }
  showLoadFailure();
});

function showLoadFailure(): void {
  const root = document.getElementById("app");
  if (!root || root.hasChildNodes()) return;
  const message = document.createElement("p");
  message.textContent = "This room could not load. Please try again.";
  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "button button--ember";
  retry.textContent = "Reload this room";
  retry.addEventListener("click", () => window.location.reload());
  root.append(message, retry);
}

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
  try { clearChunkRecovery(window.sessionStorage); } catch { /* Storage is optional. */ }
}).catch(showLoadFailure);
