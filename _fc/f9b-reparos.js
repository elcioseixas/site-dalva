/* Mantém o escopo dos reparos nas navegações internas do Framer. */
(() => {
  const pages = {
    "/": "home",
    "/patrocinio/temporadas": "temporadas",
    "/patrocinio/impacto-social": "impacto",
    "/contrapartidas/modalidades-parceria": "modalidades"
  };
  const sync = () => {
    const route = location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";
    document.documentElement.dataset.dalvaPage = pages[route] || (route.startsWith("/patrocinio/") ? "patrocinio-detalhe" : "");
  };
  sync();
  for (const method of ["pushState", "replaceState"]) {
    const original = history[method];
    history[method] = function (...args) {
      const result = Reflect.apply(original, this, args);
      sync();
      return result;
    };
  }
  addEventListener("popstate", sync);
  addEventListener("pageshow", sync);
})();
