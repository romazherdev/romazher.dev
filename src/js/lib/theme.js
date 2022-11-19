const localStorageKey = 'theme';
const switcherSelector = '[data-id="theme-switcher"]';
const switchers = document.querySelectorAll(switcherSelector) || [];
const body = document.body;

let currentTheme =
    localStorage.getItem(localStorageKey) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');

setTheme(currentTheme);
updateSwitchersState(switchers, currentTheme);
listenThemeSwitches(switchers);

function listenThemeSwitches(switchers) {
    switchers.forEach((switcher) => {
        switcher.addEventListener('click', (e) => {
            const theme = e.target.value;

            if (theme === currentTheme) {
                return;
            }

            updateSwitchersState(switchers, theme);
            setTheme(theme);
        });
    });
}

function setTheme(theme) {
    if (currentTheme === 'dark') {
        body.classList.remove(currentTheme);
    }

    if (theme === 'dark') {
        body.classList.add(theme);
    }

    currentTheme = theme;
    localStorage.setItem(localStorageKey, theme);
}

function updateSwitchersState(switchers, theme) {
    switchers.forEach((switcher) => {
        switcher.setAttribute('aria-pressed', switcher.value === theme);
    });
}
