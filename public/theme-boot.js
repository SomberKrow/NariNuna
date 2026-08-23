(function () {
  var allowed = ["nari", "dark", "light"];
  var stored = null;
  try {
    stored = window.localStorage.getItem("nari-haven-theme-v1");
  } catch {
    stored = null;
  }
  var fallback = document.documentElement.dataset.theme || "nari";
  var theme = allowed.indexOf(stored) >= 0 ? stored : fallback;
  document.documentElement.dataset.theme = theme;
  var colors = { nari: "#2a1820", dark: "#130d13", light: "#efe1cd" };
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", colors[theme]);
})();
