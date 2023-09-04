const navlist = document.querySelectorAll('nav.navlist a');

function getAttributeId(target)
{
    let element = target;
    return element.getAttribute('href');
}

function offsetTopId(id){
    let section = document.querySelector(id);
    return section.offsetTop;
}

function ExecScrollClick(id){
    const links = document.querySelectorAll("nav .navlist a");
    links.forEach(l => {
        l.classList.remove('active');
        document.querySelector("nav .navlist a[href*='" + id + "'").classList.add('active');
    });
}

function scrollToOnClick(e) {
    e.preventDefault();
    let id = getAttributeId(e.target);
    let to = offsetTopId(id); 
    ExecScrollClick(id);

    window.scroll(
    {
        top: to,
        behavior: "smooth"
    });
}

function navbarClassRemove() {
    document.querySelector('header').classList.remove("bg-dark");
    document.querySelector('header').classList.remove("fixed-top");
    document.querySelector('header').classList.remove("bg-transparent");
    document.querySelector('div.btn-acima').style.visibility = "hidden";
}

function navbarClassAdd() {
    document.querySelector('header').classList.remove("bg-transparent");
    document.querySelector('header').classList.add("fixed-top");
    document.querySelector('header').classList.add("bg-dark");
    document.querySelector('div.btn-acima').style.visibility = "visible";   
}

navlist.forEach(e => {
    e.addEventListener('click', scrollToOnClick);
});

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const init = document.querySelector('#INICIO');
    const result = (init.clientHeight / 3) * 2;

    if(scroll > result)
    {
        navbarClassAdd();
    }
    else{
        navbarClassRemove();
    }
});
