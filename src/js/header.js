document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-header-ul");
    const navLinks = document.querySelectorAll(".nav-header-ul a");
    const burgerBtn = document.querySelector(".open-modal");
    const closeBtn = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-burger-menu");
    
    if (!menuBtn || !navMenu || navLinks.length === 0 || !burgerBtn || !closeBtn || !mobileMenu) return;

    // Функція для перемикання класу 'active' у десктопному меню
    function toggleMenu() {
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            navMenu.style.opacity = "1";
            navMenu.style.transform = "translateY(0)";
            navMenu.style.visibility = "visible";
        } else {
            navMenu.style.opacity = "0";
            navMenu.style.transform = "translateY(-10px)";
            navMenu.style.visibility = "hidden";
        }
    }

    // Функція для відкриття мобільного меню з анімацією
    function openMobileMenu() {
        mobileMenu.style.visibility = "visible";
        mobileMenu.style.opacity = "1";
        mobileMenu.style.transform = "scale(1)";
        mobileMenu.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        document.body.classList.add("no-scroll");
    }

    // Функція для закриття мобільного меню з анімацією
    function closeMobileMenu() {
        mobileMenu.style.opacity = "0";
        mobileMenu.style.transform = "scale(0.8)";
        setTimeout(() => {
            mobileMenu.style.visibility = "hidden";
        }, 500);
        document.body.classList.remove("no-scroll");
    }

    // Відкриття/закриття меню по кліку на кнопку (десктоп)
    menuBtn.addEventListener("click", toggleMenu);

    // Відкриття бургер-меню (мобільні пристрої)
    burgerBtn.addEventListener("click", openMobileMenu);

    // Закриття бургер-меню по кнопці "Х"
    closeBtn.addEventListener("click", closeMobileMenu);

    // Плавний скрол до секцій і закриття мобільного меню
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Відступ для зручності
                    behavior: "smooth"
                });
            }
            
            // Закриття меню після вибору
            navMenu.classList.remove("active");
            navMenu.style.opacity = "0";
            navMenu.style.transform = "translateY(-10px)";
            navMenu.style.visibility = "hidden";
            closeMobileMenu();
        });
    });
});



