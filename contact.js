// ========== Footer year ==========
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// ========== WeChat copy ==========
const wechatCard = document.querySelector(".wechat-card");

function showCopied(card) {
  const hint = card.querySelector(".copy-hint");
  if (!hint) return;

  const original = hint.textContent;
  card.classList.add("copied");
  hint.textContent = "Copied ✓";

  setTimeout(() => {
    hint.textContent = original;
    card.classList.remove("copied");
  }, 1500);
}

async function copyText(text) {
  // Modern API (HTTPS)
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  // Fallback (file:// / older browsers)
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

if (wechatCard) {
  wechatCard.addEventListener("click", async () => {
    const wechatId = wechatCard.dataset.wechat || "RRitaa__";
    const ok = await copyText(wechatId);
    if (ok) showCopied(wechatCard);
  });
}

