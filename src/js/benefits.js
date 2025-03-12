const bnfBtn = document.querySelector('#bnfBtn');
const scrollFooter = document.querySelector('#worktogether');

bnfBtn.addEventListener('click', () => {
  scrollFooter.scrollIntoView({ behavior: 'smooth' });
});
