document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.navbar__menu-toggle');
  const menuMain = document.querySelector('.navbar__menu-main');

  menuToggle.addEventListener('click', () => {
      menuMain.classList.toggle('active');
  });
});
