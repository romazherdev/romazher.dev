const toggle = document.getElementById('menu-toggle');

toggle?.addEventListener('click', (e) => {
    const expanded = JSON.parse(e.currentTarget.getAttribute('aria-expanded'));
    e.currentTarget.setAttribute('aria-expanded', !expanded);
});
