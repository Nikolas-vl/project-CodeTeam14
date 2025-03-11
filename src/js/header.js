document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu");
    const nav = document.querySelector(".navigation-header-list");
    const body = document.body;
    const navLinks = document.querySelectorAll(".nav-header-link");
    const firstNavLink = navLinks[0];
    let menuIsOpen = false;

    const toggleMenu = () => {
        menuIsOpen = !menuIsOpen;
        nav.classList.toggle("active", menuIsOpen);
        body.classList.toggle("no-scroll", menuIsOpen);
        menuBtn.setAttribute('aria-expanded', menuIsOpen);
        closeMenuBtn.setAttribute('aria-expanded', menuIsOpen);

        if (menuIsOpen) {
            firstNavLink?.focus();
        } else {
            menuBtn.focus();
        }
    };

    const closeMenu = () => {
        if (!menuIsOpen) return;
        menuIsOpen = false;
        nav.classList.remove("active");
        body.classList.remove("no-scroll");
        menuBtn.setAttribute('aria-expanded', "false");
        closeMenuBtn.setAttribute('aria-expanded', "false");
        menuBtn.focus();
    };

    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });

    closeMenuBtn.addEventListener("click", closeMenu);

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuIsOpen) {
            closeMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (menuIsOpen && !nav.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });
});


