const storageKey = 'theme';
const switcherSelector = '[data-theme-switcher]';
const darkPreferenceMedia = window.matchMedia('(prefers-color-scheme: dark)');

const userPrefersDark = () => darkPreferenceMedia.matches;
const getThemePreference = () => localStorage.getItem(storageKey) || 'auto';

window.theme = {
  eventName: 'themechange',
  value: getThemePreference(),
  set: (theme) => {
    window.theme.value = theme;

    if (theme === 'auto') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }

    reflectPreference();
  },
};

function reflectPreference() {
  if (
    window.theme.value === 'dark' ||
    (window.theme.value === 'auto' && userPrefersDark())
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const { eventName, value } = window.theme;
  window.dispatchEvent(new CustomEvent(eventName, { detail: value }));
}

reflectPreference();

window.addEventListener('load', () => {
  darkPreferenceMedia.addEventListener('change', () => {
    if (!localStorage.getItem(storageKey)) {
      reflectPreference();
    }
  });
});
