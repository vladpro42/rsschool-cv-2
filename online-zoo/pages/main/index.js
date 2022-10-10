import Swiper from 'swiper';
  // import Swiper styles

  /* const swiper = new Swiper(...); */


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

const testimonialsBox = document.querySelectorAll('.testimonials__box');
const testimonialsInner = document.querySelector('.testimonials__inner');
const popupTestimonials = document.querySelector('.popup__testimonials');
const testimonials = document.querySelector('.testimonials');




testimonialsBox.forEach( (item, index) => {
    item.addEventListener('click', () => {
        popupTestimonials.classList.add('popup--active'); 
        item.classList.add('testimonials__box--active');
        testimonials.classList.add('testimonials--active');
       
    });
});


// SLIDER

/* const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 5000,
      },
  }); */

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
      },

      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });