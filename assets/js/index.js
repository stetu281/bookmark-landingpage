

document.querySelector('.header__button').addEventListener('click', (e) => {
    document.querySelector('.header__nav-container').classList.toggle('header__nav-container--show');
    document.querySelector('.header__logo').classList.toggle('header__logo--white');
    e.target.classList.toggle('header__button--close');
})