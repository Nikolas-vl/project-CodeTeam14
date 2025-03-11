const coverS = document.querySelector('.covers');
const lisT = document.querySelector('.container-covers');
const children = lisT.children;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};
const observer = new IntersectionObserver(handlerPagination, options);
observer.observe(coverS);

function handlerPagination(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Array.from(children).forEach((child, index) => {
        if (index === 1 || index === 3) {
          if (!child.classList.contains('list-covers')) {
            child.classList.add('list-covers');
          }
        } else {
          if (!child.classList.contains('container-covers-list-anim')) {
            child.classList.add('container-covers-list-anim');
          }
        }
      });
    } else {
      Array.from(children).forEach(child => {
        if (child.classList.contains('container-covers-list-anim')) {
          child.classList.remove('container-covers-list-anim');
        }
        if (child.classList.contains('list-covers')) {
          child.classList.remove('list-covers');
        }
      });
    }
  });
}
