const btn_menu = document.querySelector("#btn_menu");
const btn_close = document.querySelector("#btn_close");
const section = document.querySelectorAll('main section');
const links = document.querySelectorAll('.navlist .nav-item a.nav-link');
const navbar = document.querySelector('header');

btn_menu.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.add("open");
});

btn_close.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("open");
});

window.onscroll = () => {
    section.forEach(s => {
        let top = window.scrollY;
        let offset = s.offsetTop - 150;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');
        let nav = navbar.clientHeight * 1.5;
        
        if(top > nav){
            navbar.classList.add('fixed-top');
        }
        else {
            navbar.classList.remove('fixed-top');
        }

        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navlist .nav-item a[href*='+ id +']').classList.add('active');
            });

        }
    });
};