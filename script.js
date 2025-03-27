document.addEventListener("DOMContentLoaded", () => {
  const typing = document.querySelector(".typing-output");
  let dots = 0;
  setInterval(() => {
    dots = (dots + 1) % 4;
    typing.textContent = "> Predicting" + ".".repeat(dots);
  }, 500);
});
