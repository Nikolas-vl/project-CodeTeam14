const bnfBtn = document.querySelector('#bnfBtn');
const scrollFooter = document.querySelector('#footer');

bnfBtn.addEventListener('click', () => {
  scrollFooter.scrollIntoView({ behavior: 'smooth' });
});
