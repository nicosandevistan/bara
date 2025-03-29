// Add navigation active state handler
document.addEventListener('DOMContentLoaded', () => {
  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  // Clear all active classes
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });
  
  // Set active class for current page
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const open = button.classList.contains('active');
        document.querySelectorAll('.accordion-header').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.accordion-body').forEach(body => body.style.maxHeight = null);

        if (!open) {
            button.classList.add('active');
            const body = button.nextElementSibling;
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});


document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.parentElement;
        const answer = card.querySelector('.faq-answer');
        const open = card.classList.contains('open');

        document.querySelectorAll('.faq-card').forEach(c => {
            c.classList.remove('open');
            c.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!open) {
            card.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
