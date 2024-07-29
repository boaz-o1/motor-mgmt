const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.main-content > div');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        sections.forEach(section => section.classList.add('hidden'));
        document.querySelector(this.getAttribute('href')).classList.remove('hidden');
    });
});