// life.js — parallax drift + clickable memory modal
(function () {
  const stage = document.getElementById("constellation");
  if (!stage) return;

  // -----------------------
  // 1) Parallax (subtle)
  // -----------------------
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) {
    let targetX = 0, targetY = 0;
    let px = 0, py = 0;

    function onMove(e) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      targetX = Math.max(-1, Math.min(1, dx)) * 12;
      targetY = Math.max(-1, Math.min(1, dy)) * 10;
    }

    function tick() {
      px += (targetX - px) * 0.08;
      py += (targetY - py) * 0.08;

      stage.style.setProperty("--px", px.toFixed(2) + "px");
      stage.style.setProperty("--py", py.toFixed(2) + "px");

      requestAnimationFrame(tick);
    }

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", () => { targetX = 0; targetY = 0; });
    stage.addEventListener("touchstart", () => { targetX = 0; targetY = 0; }, { passive: true });

    stage.style.setProperty("--px", "0px");
    stage.style.setProperty("--py", "0px");
    tick();
  }

  // -----------------------
  // 2) Memory Modal
  // -----------------------
  const modal = document.getElementById("memoryModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalText = document.getElementById("modalText");

  function openModal(node) {
    const img = node.querySelector("img");
    const title = node.getAttribute("data-title") || "";
    const date = node.getAttribute("data-date") || "";
    const memory = node.getAttribute("data-memory") || "";

    modalImg.src = img ? img.src : "";
    modalImg.alt = img ? (img.alt || title || "Memory photo") : "Memory photo";

    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalDate.style.display = date ? "block" : "none";
    modalText.textContent = memory;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // click photo nodes
  stage.addEventListener("click", (e) => {
    const node = e.target.closest(".node");
    if (!node) return;
    openModal(node);
  });

  // close (backdrop / x)
  modal.addEventListener("click", (e) => {
    if (e.target && e.target.getAttribute("data-close") === "1") closeModal();
  });

  // esc to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();
