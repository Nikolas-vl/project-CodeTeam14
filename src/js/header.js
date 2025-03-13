document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-header-ul');
  const navLinks = document.querySelectorAll('.nav-header-ul-mob a');
  const burgerBtn = document.querySelector('.open-modal');
  const closeBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-burger-menu');
  const orderBtnMob = document.querySelector('.order-btn-mob');

  if (
    !menuBtn ||
    !navMenu ||
    navLinks.length === 0 ||
    !burgerBtn ||
    !closeBtn ||
    !mobileMenu ||
    !orderBtnMob
  )
    return;

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navMenu.style.opacity = navMenu.classList.contains('active') ? '1' : '0';
    navMenu.style.transform = navMenu.classList.contains('active')
      ? 'translateY(0)'
      : 'translateY(-10px)';
    navMenu.style.visibility = navMenu.classList.contains('active')
      ? 'visible'
      : 'hidden';
  }

  function openMobileMenu() {
    mobileMenu.style.visibility = 'visible';
    mobileMenu.style.opacity = '1';
    mobileMenu.style.transform = 'scale(1)';
    mobileMenu.style.transition =
      'transform 0.5s ease-out, opacity 0.5s ease-out';
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'scale(0.8)';
    setTimeout(() => {
      mobileMenu.style.visibility = 'hidden';
    }, 500);
    document.body.classList.remove('no-scroll');
  }

  menuBtn.addEventListener('click', toggleMenu);
  burgerBtn.addEventListener('click', openMobileMenu);
  closeBtn.addEventListener('click', closeMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth',
        });
      }

      closeMobileMenu();
    });
  });

  orderBtnMob.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth',
      });
    }

    closeMobileMenu();
  });
});
