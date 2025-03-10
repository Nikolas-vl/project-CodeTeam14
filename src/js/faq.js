import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container-faq', {
    showMultiple: true,
    openOnInit: [],
  });
});