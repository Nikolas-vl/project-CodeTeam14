import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    openOnInit: [], // Жоден елемент не відкритий за замовчуванням
  });
});