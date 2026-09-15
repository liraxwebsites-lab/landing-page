/* LIRAX — interações mínimas (sem frameworks) */
(function () {
  // Ano dinâmico no rodapé
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Header: sombra ao rolar
  var header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
  // Previews ao vivo (antes/depois): renderizam os demos em janela de 1024px
  // e reduzem proporcionalmente para caber nos painéis.
  function fitFrame(frame, inner) {
    if (!frame || !inner || !frame.clientWidth) return;
    var s = frame.clientWidth / 1024;
    inner.style.transform = "scale(" + s + ")";
    frame.style.height = Math.round(780 * s) + "px";
  }
  var frames = [
    [document.getElementById("live-frame"), document.getElementById("live-iframe")],
    [document.getElementById("live-frame-depois"), document.getElementById("live-iframe-depois")]
  ];
  function fitLive() {
    frames.forEach(function (pair) { fitFrame(pair[0], pair[1]); });
  }
  // Blindagem extra (os demos já se blindam sozinhos): cliques e envios
  // dentro dos iframes não executam nada.
  function neuterFrame(inner) {
    try {
      var doc = inner.contentDocument || (inner.contentWindow && inner.contentWindow.document);
      if (!doc) return;
      var kill = function (e) { e.preventDefault(); e.stopPropagation(); };
      doc.addEventListener("click", kill, true);
      doc.addEventListener("submit", kill, true);
    } catch (err) { /* sem acesso ao iframe: mantém como está */ }
  }
  function onFrameLoad() {
    fitLive();
    frames.forEach(function (pair) { if (pair[1]) neuterFrame(pair[1]); });
  }
  window.addEventListener("resize", fitLive);
  frames.forEach(function (pair) { if (pair[1]) pair[1].addEventListener("load", onFrameLoad); });
  fitLive();
})();
