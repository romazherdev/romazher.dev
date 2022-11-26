import { createFocusTrap } from 'focus-trap';

const header = document.getElementById('header');
const menuAnimatedContainer = document.getElementById('menu_container');
const toggle = document.getElementById('menu-toggle');
const focusTrap = createFocusTrap(header);

toggle?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const wasExpanded = JSON.parse(btn.getAttribute('aria-expanded'));
    const currentlyExpanded = !wasExpanded;

    menuAnimatedContainer.classList.toggle('menu-closed', wasExpanded);
    btn.setAttribute('aria-expanded', currentlyExpanded);
    currentlyExpanded ? focusTrap.activate() : focusTrap.deactivate();
    document.body.classList.toggle('locked', currentlyExpanded);
});
