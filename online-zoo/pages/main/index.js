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