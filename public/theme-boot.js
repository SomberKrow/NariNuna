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
  var colors = { nari: "#3d2330", dark: "#160f18", light: "#f4e8d3" };
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", colors[theme]);
})();
