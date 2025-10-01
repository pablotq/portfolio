const buttons = document.querySelectorAll('.button');

// buttons.forEach(button => button.addEventListener('hover', () => button.classList.add('animado')));
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => button.classList.add('animado'));
  button.addEventListener('mouseleave', () => button.classList.remove('animado'));
});