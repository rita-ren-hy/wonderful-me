// Nav scroll（保留）
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Dynamic quote（轻呼吸）
document.addEventListener("DOMContentLoaded", function () {
  const quoteEl = document.getElementById("dynamic-quote");
  if (!quoteEl) return;

  const zhEl = quoteEl.querySelector(".zh");
  const enEl = quoteEl.querySelector(".en");

  const slogans = [
    {
      zh: "从好奇开始，走向行动。",
      en: "Where curiosity turns into action."
    },
    {
      zh: "欢迎走进我的世界，慢慢认识我。",
      en: "Welcome to my world — let’s get to know each other."
    },
    {
      zh: "这里记录我思考、创造与成长的过程。",
      en: "A space where I think, create, and grow."
    }
  ];

  let index = 0;

  function fadeText(el, text) {
    el.classList.remove("active");
    setTimeout(() => {
      el.textContent = text;
      el.classList.add("active");
    }, 600);
  }

  function changeSlogan() {
    fadeText(zhEl, slogans[index].zh);
    fadeText(enEl, slogans[index].en);
    index = (index + 1) % slogans.length;
  }

  zhEl.classList.add("active");
  enEl.classList.add("active");

  setInterval(changeSlogan, 5000);
});


