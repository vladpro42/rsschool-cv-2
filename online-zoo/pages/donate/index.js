
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const closeBurger = document.querySelector('.close__burger');
const burgerIcon = document.querySelector('.burger__icon');
const burgerWrap = document.querySelector('.burger__wrap');
let anotherAmount = document.querySelector('.another__amount');
let arrowPrice = [5000, 2000, 1000, 500, 250, 100, 50, 25];
let body = document.body;


burgerIcon.addEventListener('click', () => {

    if(burger.classList.contains('burger--active')) {

    } else {
        burger.classList.add('burger--active');
    }
    body.classList.add('body--active');
}); 

closeBurger.addEventListener('click', () => {
    if(burger.classList.contains('burger--active')) {
        burger.classList.remove('burger--active');
    }
    body.classList.remove('body--active');
});

burger.addEventListener('click', (event) => {
        console.log(event.target)
        event.target.classList.remove('burger--active');
        body.classList.remove('body--active');
});


const elipseCircle = document.querySelectorAll('.elipse__circle');
const priceText = document.querySelectorAll('.price__text');


elipseCircle.forEach( (elem, index) => {
    elem.addEventListener('click', (e) => {
        priceText[index].classList.toggle('price__text--active');
        elipseCircle[index].classList.toggle('elipse__circle--active');
        
        priceText.forEach((item, num) => {
            if(item.classList.contains('price__text--active') && num != index){
                item.classList.remove('price__text--active');
            }
        }) ;

        elipseCircle.forEach((item, num) => {
            if(item.classList.contains('elipse__circle--active') && num != index){
                item.classList.remove('elipse__circle--active');
            }
        });

        arrowPrice.forEach((item, num) => {
            if(index === num) {
                anotherAmount.value = item;
            }
        });
    });
});

priceText.forEach( (elem, index) => {
    elem.addEventListener('click', () => {
        priceText[index].classList.toggle('price__text--active');
        elipseCircle[index].classList.toggle('elipse__circle--active');
        
        priceText.forEach((item, num) => {
            if(item.classList.contains('price__text--active') && num != index){
                item.classList.remove('price__text--active');
            }
        }) ;

        elipseCircle.forEach((item, num) => {
            if(item.classList.contains('elipse__circle--active') && num != index){
                item.classList.remove('elipse__circle--active');
            }
        });

        arrowPrice.forEach((item, num) => {
            if(index === num) {
                anotherAmount.value = item;
            }
        });
    })
});





anotherAmount.addEventListener('input', () => {
    let anotherAmountValue = anotherAmount.value;
    if( anotherAmountValue.length >= 1 && anotherAmountValue.length < 5 && anotherAmountValue != 0) {
        anotherAmount.style.border = '1px solid green';       
    } else {
        anotherAmount.style.border = '1px solid red';
    }

    arrowPrice.forEach( (item, index) => {
        console.log(anotherAmount.value)
        console.log(item)
        if(+anotherAmount.value === item) {
            priceText[index].classList.toggle('price__text--active');
            elipseCircle[index].classList.toggle('elipse__circle--active');
        } else if(+anotherAmount.value != item) {
            priceText[index].classList.remove('price__text--active');
            elipseCircle[index].classList.remove('elipse__circle--active');
        }
    });
});

