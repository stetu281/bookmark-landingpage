

document.querySelector('.header__button').addEventListener('click', (e) => {
    document.querySelector('.header__nav-container').classList.toggle('header__nav-container--show');
    document.querySelector('.header__logo').classList.toggle('header__logo--white');
    e.target.classList.toggle('header__button--close');
})



const links = document.querySelectorAll('.features__list-item');
const slide = document.querySelector('.slider__slides');
const actives = document.querySelectorAll('.features__link');

for(let link of links) {
    link.addEventListener('click', (e) => {
        
        for(let active of actives) {
            active.classList.remove('features__link--active');
        }     
        
        e.target.querySelector('.features__link').classList.add('features__link--active');

        if(e.target.id === "link-one") {
            slide.style.left = '0';
        } else if (e.target.id === "link-two") {
            slide.style.left = '-100%';
        } else {
            slide.style.left = '-200%';
        }

    })
}


const buttons = document.querySelectorAll('.faq__question-container');

for(let button of buttons) {
    button.addEventListener('click', (e) => {
        e.target.children[1].classList.toggle('faq__arrow--open');
        e.target.children[2].classList.toggle('faq__answer-container--open');
    })
}



const submit = document.querySelector('.cta__button');

submit.addEventListener('click', () => {
    let input = document.querySelector('.cta__input');
    const error = document.querySelector('.cta__error');
    const icon = document.querySelector('.cta__icon');

    if(input.value === "") {
        error.style.top = "85%";
        input.classList.add('cta__input--error');
        icon.classList.add('cta__icon--show');
    } else {
        error.style.top = "0";
        input.classList.remove('cta__input--error');
        icon.classList.remove('cta__icon--show');
    }
})