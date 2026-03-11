export const initHeaderBehavior = (): void => {
  if (typeof window === 'undefined') return;

  const header = document.querySelector('[data-site-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (!(header instanceof HTMLElement)) return;
  if (!(toggle instanceof HTMLButtonElement)) return;
  if (!(menu instanceof HTMLElement)) return;

  const syncScrolledState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.style.removeProperty('overflow');
  };

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener(
    'scroll',
    () => {
      syncScrolledState();
    },
    { passive: true },
  );

  window.addEventListener('resize', () => {
    syncScrolledState();
    if (window.innerWidth >= 960) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  syncScrolledState();
};
