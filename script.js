document.addEventListener('DOMContentLoaded', () => {
  // Hide loader after delay
  setTimeout(() => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) loader.classList.add('loader-hidden');
  }, 3500); // Wait for animation to complete

  // Content transition on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Add the content-transition class to all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('content-transition');
    observer.observe(section);
  });

  // Page transition for nav links
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

// Handle back button navigation with transition
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    const transition = document.querySelector('.page-transition');
    transition.classList.add('exit');

    setTimeout(() => {
      transition.classList.remove('active', 'exit');
    }, 500);
  }
});