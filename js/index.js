const navigationLink = document.querySelectorAll('.navigation__link');
const navigationBorder = document.querySelectorAll('.navigation__border')
if (navigationLink) {

    navigationLink.forEach(item => {
        item.addEventListener('mouseover', () => {
            navigationBorder.forEach(elem => {
                if (elem.classList.contains('navigation__border--activ')) {
                    elem.classList.remove('navigation__border--activ');
                }
            });
        });
    });

    navigationLink.forEach((item, indexLink) => {
        item.addEventListener('mouseout', () => {
            navigationBorder.forEach((elem, indexBorder) => {
                if (indexLink === indexBorder) {
                    elem.classList.add('navigation__border--activ');
                }
            })
        });
    });


}

let myScroll = document.querySelector('.button-top')

window.addEventListener('scroll', function () {
    myScroll.classList.toggle('button-top--activ', window.scrollY > 90)
});

myScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
