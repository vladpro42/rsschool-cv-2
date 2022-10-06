const slideBox = document.querySelectorAll('.slide__box');
const slideContent = document.querySelectorAll('.slide__content');

slideBox.forEach( (item, index) => {
    item.addEventListener('mouseover', () => {
        slideContent.forEach( (element, idnexEl) => {
            if( index === idnexEl ) {
                element.classList.add('slide__box--active');
            }
        });
    });

    item.addEventListener('mouseout', () => {
        slideContent.forEach( (element, idnexEl) => {
            console.log('hi')
            if( element.classList.contains('slide__box--active')  && index === idnexEl ) {
                element.classList.remove('slide__box--active');
            }
        });
    });
});


const testimonialsContent = document.querySelectorAll('.testimonials__content');

testimonialsContent.forEach( (item, index) => {
    if(index === 0) {
        item.textContent = 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.';
    } else if( index === 1 ) {
        item.textContent ='My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My';
    } else if( index === 2 ) {
        item.textContent = 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My met . My';
    }
});


const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const closeBurger = document.querySelector('.close__burger');
const burgerIcon = document.querySelector('.burger__icon');
const burgerWrap = document.querySelector('.burger__wrap');


burgerIcon.addEventListener('click', () => {

    if(burger.classList.contains('burger--active')) {

    } else {
        burger.classList.add('burger--active');
    }
}); 

closeBurger.addEventListener('click', () => {
    if(burger.classList.contains('burger--active')) {
        burger.classList.remove('burger--active');
    }
});

burger.addEventListener('click', (event) => {
        console.log(event.target)
        event.target.classList.remove('burger--active');
    
});
