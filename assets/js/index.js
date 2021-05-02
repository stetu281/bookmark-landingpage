

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

