window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
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

  function changeSlogan() {
    quoteEl.style.opacity = 0;

    setTimeout(() => {
      zhEl.textContent = slogans[index].zh;
      enEl.textContent = slogans[index].en;
      quoteEl.style.opacity = 1;
      index = (index + 1) % slogans.length;
    }, 400);
  }

  changeSlogan();
  setInterval(changeSlogan, 6000);
});

