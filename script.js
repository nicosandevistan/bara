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

  // Page transition effect
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (link.getAttribute('href') !== window.location.pathname.split("/").pop()) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const transition = document.querySelector('.page-transition');
        transition.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});

// Handle browser back button
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    const transition = document.querySelector('.page-transition');
    transition.classList.add('exit');
    setTimeout(() => {
      transition.classList.remove('active', 'exit');
    }, 500);
  }
});