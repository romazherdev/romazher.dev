const toggle = document.getElementById('menu-toggle');

toggle?.addEventListener('click', (e) => {
    const wasExpanded = JSON.parse(
        e.currentTarget.getAttribute('aria-expanded')
    );
    const currentlyExpanded = !wasExpanded;

    e.currentTarget.setAttribute('aria-expanded', currentlyExpanded);
    document.body.classList.toggle('locked', currentlyExpanded);
});
