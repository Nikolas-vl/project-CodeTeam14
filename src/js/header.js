document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const burgerMenu = document.querySelector(".burger-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    const nav = document.querySelector(".navigation-header");
    const body = document.body;
    const navLinks = document.querySelectorAll(".navigation-header a");
    const orderBtn = document.querySelector(".order-btn");


    burgerMenu.addEventListener("click", () => {
        nav.classList.add("active");
        body.classList.add("no-scroll");
    });

    
        closeMenuBtn.addEventListener("click", () => {
        nav.classList.remove("active");
        body.classList.remove("no-scroll");
    });

    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    });

    if (window.innerWidth >= 768) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            nav.classList.toggle("active");
        });
    }
});

