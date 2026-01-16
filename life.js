// life.js — subtle parallax pointer drift (high-end, restrained)
(function () {
  const stage = document.getElementById("constellation");
  if (!stage) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let targetX = 0, targetY = 0;
  let px = 0, py = 0;

  function onMove(e) {
    const rect = stage.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    // clamp + subtle scale
    targetX = Math.max(-1, Math.min(1, dx)) * 12;
    targetY = Math.max(-1, Math.min(1, dy)) * 10;
  }

  function tick() {
    // smooth follow
    px += (targetX - px) * 0.08;
    py += (targetY - py) * 0.08;

    stage.style.setProperty("--px", px.toFixed(2) + "px");
    stage.style.setProperty("--py", py.toFixed(2) + "px");

    requestAnimationFrame(tick);
  }

  stage.addEventListener("mousemove", onMove);
  stage.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  // touch: keep static
  stage.addEventListener("touchstart", () => {
    targetX = 0;
    targetY = 0;
  }, { passive: true });

  // init
  stage.style.setProperty("--px", "0px");
  stage.style.setProperty("--py", "0px");
  tick();
})();
