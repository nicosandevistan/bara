document.addEventListener('DOMContentLoaded', () => {
  const hasSeenLoader = sessionStorage.getItem('seenLoader');

  if (!hasSeenLoader) {
    // First visit in session: show loader
    setTimeout(() => {
      const loader = document.querySelector('.loader-wrapper');
      if (loader) loader.classList.add('loader-hidden');
    }, 3500);
    sessionStorage.setItem('seenLoader', 'true');
  } else {
    // Skip loader
    const loader = document.querySelector('.loader-wrapper');
    if (loader) loader.classList.add('loader-hidden');
  }

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

  // FAQ Toggle Logic
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.faq-card');
      card.classList.toggle('open');
    });
  });
});