const btnClose = document.querySelector('.btn-close');
const btnLogin = document.querySelector('.btn-login');
const card = document.querySelector('.card');

function e_close(){
    card.style.visibility = "hidden";
}

btnClose.onclick = () => {
    card.classList.remove('card-ativo');
    card.classList.add('card-inativo');
};

btnLogin.onclick = () => {
    card.classList.remove('card-inativo');
    card.classList.add('card-ativo');
};