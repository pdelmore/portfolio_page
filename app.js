function toggleTheme() {
    console.log('Toggling theme'); // Debugging line
    const body = document.body;
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#themeSwitch');
    const storedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(storedTheme);

    // Set the switch position based on the current theme
    themeSwitch.checked = storedTheme === 'dark';

    themeSwitch.addEventListener('change', () => {
        const theme = themeSwitch.checked ? 'dark' : 'light';
        applyTheme(theme);
    });
});

function applyTheme(theme) {
    const body = document.body;
    const sections = document.querySelectorAll('section');
    if (theme === 'dark') {
        body.setAttribute('data-bs-theme', 'dark');
        body.classList.add('bg-dark', 'text-light');
        body.classList.remove('bg-light', 'text-dark');
        sections.forEach((section, index) => {
            section.classList.remove('light-theme-section-odd', 'light-theme-section-even');
            section.classList.add(index % 2 === 0 ? 'dark-theme-section-odd' : 'dark-theme-section-even');
        });
    } else {
        body.removeAttribute('data-bs-theme');
        body.classList.add('bg-light', 'text-dark');
        body.classList.remove('bg-dark', 'text-light');
        sections.forEach((section, index) => {
            section.classList.remove('dark-theme-section-odd', 'dark-theme-section-even');
            section.classList.add(index % 2 === 0 ? 'light-theme-section-odd' : 'light-theme-section-even');
        });
    }
    localStorage.setItem('theme', theme);
}