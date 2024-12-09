// Toggle dark/light mode
const toggle = document.getElementById('toggleMode');

// Check localStorage for saved mode preference
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    document.querySelector('header').classList.add('light');
    document.querySelector('.content').classList.add('light');
    document.querySelector('footer').classList.add('light');

    toggle.checked = true;
} else {
    document.body.classList.remove('light');
    document.querySelector('header').classList.remove('light');
    document.querySelector('.content').classList.remove('light');
    document.querySelector('footer').classList.remove('light');

    toggle.checked = false;
}

// Save and apply the theme when toggled
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('light');
        document.querySelector('header').classList.add('light');
        document.querySelector('.content').classList.add('light');
        document.querySelector('footer').classList.add('light');

        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        document.querySelector('header').classList.remove('light');
        document.querySelector('.content').classList.remove('light');
        document.querySelector('footer').classList.remove('light');

        localStorage.setItem('theme', 'dark');
    }
});
