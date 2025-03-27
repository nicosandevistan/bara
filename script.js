
document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  });
  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Terminal typing effect
  const terminal = document.querySelector(".terminal");
  if (terminal) {
    const lines = [
      "> User Input: Design a circuit that activates GFP only when arabinose is present and IPTG is absent.",
      "> BARA Output: Coding sequence for a NOT–AND gate using araC and lacI regulation. Output: GFP expression."
    ];
    terminal.innerHTML = "";
    let current = 0;
    function typeLine() {
      if (current < lines.length) {
        let chars = lines[current].split("");
        let p = document.createElement("p");
        p.classList.add("prompt");
        terminal.appendChild(p);
        let i = 0;
        let interval = setInterval(() => {
          if (i < chars.length) {
            p.textContent += chars[i++];
          } else {
            clearInterval(interval);
            current++;
            setTimeout(typeLine, 500);
          }
        }, 30);
      }
    }
    typeLine();
  }

  // Dark mode toggle
  const toggle = document.getElementById("toggle-theme");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // Remove splash after delay
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) splash.remove();
  }, 4000);
});
