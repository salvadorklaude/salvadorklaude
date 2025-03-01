document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    
    const icon = this.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('bi-lightbulb');
        icon.classList.add('bi-lightbulb-fill');
        this.classList.remove('btn-outline-light');
        this.classList.add('btn-outline-dark');
    } else {
        icon.classList.remove('bi-lightbulb-fill');
        icon.classList.add('bi-lightbulb');
        this.classList.remove('btn-outline-dark');
        this.classList.add('btn-outline-light');
    }
});
