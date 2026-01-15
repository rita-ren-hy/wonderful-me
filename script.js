window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("dynamic-quote");
  if (!quoteElement) return;

  const quotes = [
    "从好奇开始，走向行动。",
    "Where curiosity turns into action.",
    "欢迎走进我的世界，慢慢认识我。",
    "Welcome to my world — let’s get to know each other.",
    "这里记录我思考、创造与成长的过程。",
    "A space where I think, create, and grow.",
    "不只是简历，这是我。",
    "More than a resume."
  ];

  // 初始显示第一句（避免空白或闪烁）
  quoteElement.textContent = quotes[0];

  function changeQuote() {
    quoteElement.style.opacity = 0;

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
      quoteElement.style.opacity = 1;
    }, 350);
  }

  setInterval(changeQuote, 5000);
});
