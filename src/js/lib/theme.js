const themeKey = 'theme';
const switcherSelector = '[data-id="theme-switcher"]';
const switchers = document.querySelectorAll(switcherSelector) || [];
const darkPreferenceMedia = window.matchMedia('(prefers-color-scheme: dark)');

init();

function init() {
    applyActiveTheme();
    listenThemeChange();
}

function applyActiveTheme() {
    const userPrefersDark = darkPreferenceMedia.matches;
    const selectedTheme = localStorage.theme || 'auto';

    if (
        selectedTheme === 'dark' ||
        (selectedTheme === 'auto' && userPrefersDark)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    switchers.forEach((s) => {
        s.setAttribute('aria-pressed', s.value === selectedTheme);
    });
}

function listenThemeChange() {
    darkPreferenceMedia.addEventListener('change', () => {
        if (!localStorage.theme) {
            applyActiveTheme();
        }
    });
    switchers.forEach((s) => {
        s.addEventListener('click', (e) => switchTheme(e.target.value));
    });
}

function switchTheme(theme) {
    if (theme === 'auto') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', theme);
    }

    applyActiveTheme();
}