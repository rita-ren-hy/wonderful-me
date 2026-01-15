// 保持 nav 透明（即使滚动也不出现灰条）
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", function () {
  const quoteEl = document.getElementById("dynamic-quote");
  if (!quoteEl) return;

  const zhEl = quoteEl.querySelector(".zh");
  const enEl = quoteEl.querySelector(".en");
  if (!zhEl || !enEl) return;

  const slogans = [
    { zh: "从好奇开始，走向行动。", en: "Where curiosity turns into action." },
    { zh: "欢迎走进我的世界，慢慢认识我。", en: "Welcome to my world — let’s get to know each other." },
    { zh: "这里记录我思考、创造与成长的过程。", en: "A space where I think, create, and grow." },
    { zh: "不只是简历，这是我。", en: "More than a resume."}
  ];

  let index = 0;

  function setActive(isActive) {
    zhEl.classList.toggle("active", isActive);
    enEl.classList.toggle("active", isActive);
  }

  function changeSlogan() {
    // 先淡出
    setActive(false);

    // 等淡出完成后换字，再淡入
    setTimeout(() => {
      zhEl.textContent = slogans[index].zh;
      enEl.textContent = slogans[index].en;

      setActive(true);
      index = (index + 1) % slogans.length;
    }, 900);
  }

  // 初始化：先显示第一句
  setActive(true);

  // 每 6 秒换一次，呼吸感
  setInterval(changeSlogan, 3000);
});




