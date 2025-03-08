document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hero-title").innerHTML = `HELLO. <br> I'M <span>FULLSTACK DEVELOPER</span> LLOYD JEFFERSON.`;

    const socialLinks = [
        { name: "IG", url: "https://www.instagram.com/goitclub/" },
        { name: "FB", url: "https://www.facebook.com/goITclub/" },
        { name: "YT", url: "https://www.youtube.com/c/GoIT" },
        { name: "GH", url: "https://github.com/Nikolas-vl/project-CodeTeam14" } 
    ];

    const socialList = document.querySelector("ul#social-links");


    socialList.innerHTML = "";

    socialLinks.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank"; 
        li.appendChild(a);
        socialList.appendChild(li);
    });


    const emailLi = document.createElement("li");
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:lloydjefferson@gmail.com";
    emailLink.textContent = "lloydjefferson@gmail.com";
    emailLink.classList.add("email-link"); 
    emailLi.appendChild(emailLink);
    socialList.appendChild(emailLi); 
});
