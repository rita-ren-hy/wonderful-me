// 可选：如果你还想保留“滚动时加 class”逻辑，可以保留。
// 但我们 CSS 里已经让它保持透明，所以不会变灰。
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  if (window.scrollY > 50) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

document.addEventListener("DOMContentLoaded", function () {
  const quoteEl = document.getElementById("dynamic-quote");
  if (!quoteEl) return;

  const zhEl = quoteEl.querySelector(".zh");
  const enEl = quoteEl.querySelector(".en");

  const slogans = [
    { zh: "从好奇开始，走向行动。", en: "Where curiosity turns into action." },
    { zh: "欢迎走进我的世界，慢慢认识我。", en: "Welcome to my world — let’s get to know each other." },
    { zh: "这里记录我思考、创造与成长的过程。", en: "A space where I think, create, and grow." },
  ];

  let i = 0;

  function setActive(isActive) {
    zhEl.classList.toggle("active", isActive);
    enEl.classList.toggle("active", isActive);
  }

  function changeSlogan() {
    // 先淡出
    setActive(false);

    // 再换文本 + 淡入
    setTimeout(() => {
      zhEl.textContent = slogans[i].zh;
      enEl.textContent = slogans[i].en;
      setActive(true);
      i = (i + 1) % slogans.length;
    }, 600);
  }

  // 初始显示
  setActive(true);
  // 循环
  setInterval(changeSlogan, 5500);
});



