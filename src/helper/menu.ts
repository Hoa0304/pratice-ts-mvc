export const toggleMenu = () => {
  const menuToggleButton = document.querySelector('.menu-toggle') as HTMLButtonElement;
  const nav = document.querySelector('.sidebar') as HTMLElement;

  menuToggleButton.onclick = () => {
    nav.classList.toggle('active');
  };
};
