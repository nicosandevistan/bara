
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
