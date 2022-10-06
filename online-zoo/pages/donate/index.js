
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
