document.addEventListener('DOMContentLoaded', () => {
  const hasSeenLoader = sessionStorage.getItem('seenLoader');
  const loaderElement = document.querySelector('.loader-wrapper');
  const terminalElement = document.querySelector('.loader-terminal');

  if (!hasSeenLoader) {
    const funnyMessages = [
      "$ probably doing something important...",
      "$ contacting the central dogma...",
      "$ pretending we know what we're doing...",
      "$ performing science wizardry...",
      "$ checking gene vibes...",
      "$ bribing transcription machinery...",
      "$ adjusting pipette volume...",
      "$ threatening misbehaving base pairs...",
      "$ autoclaving instant ramen..."
    ];

    const messageElement = document.getElementById('loading-message');
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    const selectedMessage = funnyMessages[randomIndex];

    messageElement.style.animation = 'none';
    messageElement.style.width = 'auto';
    messageElement.innerHTML = selectedMessage;
    void messageElement.offsetWidth;

    setTimeout(() => {
      const textLength = selectedMessage.length;
      const calculatedWidth = Math.max(300, textLength * 10 + 60);
      terminalElement.style.width = calculatedWidth + 'px';

      messageElement.style.animation = "typing 3s steps(40, end), blink-caret 0.75s step-end infinite";
    }, 50);

    setTimeout(() => {
      if (loaderElement) {
        loaderElement.classList.add('loader-hidden');

        loaderElement.addEventListener('transitionend', () => {
          loaderElement.style.display = 'none';
        });

        setTimeout(() => {
          loaderElement.style.display = 'none';
        }, 650);
      }

      sessionStorage.setItem('seenLoader', 'true');
    }, 3500);
  } else {
    if (loaderElement) {
      loaderElement.classList.add('loader-hidden');
      setTimeout(() => {
        loaderElement.style.display = 'none';
      }, 50);
    }
  }

  // FAQ Toggle Logic
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.faq-card');
      card.classList.toggle('open');
    });
  });

  // Content scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('content-transition');
    observer.observe(section);
  });
});