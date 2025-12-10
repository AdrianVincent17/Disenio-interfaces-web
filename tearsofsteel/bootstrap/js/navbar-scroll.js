// Pequeño script para alternar la clase .scrolled en la navbar al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const check = () => {
    if (window.scrollY > 48) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  check();
  window.addEventListener('scroll', check, { passive: true });
});
