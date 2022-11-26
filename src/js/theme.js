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

    const themeColorMetaTag =
        document.querySelector('meta[name="theme-color"]') ||
        document.createElement('meta');
    themeColorMetaTag.name = 'theme-color';

    if (
        selectedTheme === 'dark' ||
        (selectedTheme === 'auto' && userPrefersDark)
    ) {
        document.documentElement.classList.add('dark');
        themeColorMetaTag.content = '#140e25';
    } else {
        themeColorMetaTag.content = '#f5f5f5';
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
        s.addEventListener('click', (e) => switchTheme(e.currentTarget.value));
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
