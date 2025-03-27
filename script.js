
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

    });
  }
});

function simulateBARA() {
    const input = document.getElementById('userPrompt').value.trim();
    const output = document.getElementById('baraOutput');
    if (!input) {
        output.textContent = "⚠️ Please enter a prompt.";
        return;
    }
    output.textContent = "> Parsing prompt...
> Generating response...";
    setTimeout(() => {
        output.textContent = `> User Input: ${input}
> BARA Output: Simulated circuit generated using logic gates.
> Output: GFP expression logic synthesized.`;
    }, 1500);
}
