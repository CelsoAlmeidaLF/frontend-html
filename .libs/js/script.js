
const navlist = document.querySelectorAll('nav.navlist a');

function getAttributeId(target)
{
    let element = target;
    return element.getAttribute('href');
}

function offsetTopId(id){
    let section = document.querySelector(id);
    console.log(section);
    return section.offsetTop;
}

function ExecScrollClick(id){
    const links = document.querySelectorAll("nav .navlist a");
    links.forEach(l => {
        l.classList.remove('active');
        const s = document.querySelector("nav .navlist a[href*='" + id + "'").classList.add('active');
    });
}

function scrollToOnClick(e){
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

navlist.forEach(e => {
    e.addEventListener('click', scrollToOnClick);
});

window.addEventListener('scroll', () => {

    const vScroll = window.scrollY;
    const vHeight = window.screen.height;
    const vDistancia = (vHeight -  vScroll) * 3;

    if(vScroll < vDistancia) 
    {
        document.querySelector('header').classList.remove("bg-dark");
        document.querySelector('header').classList.remove("fixed-top");
        document.querySelector('header').classList.remove("bg-transparent");
    }
    else
    {
        document.querySelector('header').classList.remove("bg-transparent");
        document.querySelector('header').classList.add("fixed-top");
        document.querySelector('header').classList.add("bg-dark");
    }
});