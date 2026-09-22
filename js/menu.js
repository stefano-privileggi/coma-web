const navigation = document.querySelector('.navigation');
const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.nav-links');
const mobileScreen = window.matchMedia('(max-width: 819px)');

function setMenuOpen(open) {
  navigation.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navigation.classList.add('menu-ready');

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

menuLinks.addEventListener('click', (event) => {
  if (mobileScreen.matches && event.target.closest('a')) {
    setMenuOpen(false);
    menuButton.focus({ preventScroll: true });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target)) setMenuOpen(false);
});

mobileScreen.addEventListener('change', () => setMenuOpen(false));
