
let start = createElement('button', 'Shuffle and start', 'btn');
let stopBtn = createElement('button','Stop', 'btn btn-gray');
let save = createElement('button', 'Save', 'btn');
let results = createElement('button', 'Results', 'btn');

let divBoxBtn = document.createElement('div');
divBoxBtn.className = 'btn__box';
document.body.append(divBoxBtn);
divBoxBtn.append(start, stopBtn, save, results);

let spanMuves = createElement('span', 'Movies: ', 'span');
let spanTime = createElement('span', 'Time: ', 'span');
let countMuv = createElement('span', '--', 'span');
let countTime = createElement('span', '--', 'span');
let count = createElement('div', '', 'count__box');
document.body.append(count);
count.append(spanMuves, countMuv, spanTime, countTime);

let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.appendChild(divContainer);
let column = createElem(4, 4); // Создание колоки
divContainer.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
divContainer.style.gridTemplateRows = `repeat(${column}, 1fr)`;

let arrowDivBox = document.querySelectorAll('.box');
arrowDivBox[arrowDivBox.length-1].style.background = 'white';


arrowDivBox.forEach( (item, index) => {
    item.dataset.position = index + 1;

    item.addEventListener('click', () => {
        let i = item.dataset.position ;console.log(i)
        i = +i + 1;
        item.dataset.position = i;  
        console.log(i)
    });
});





let frameSize = createElement('span', 'Frame size: ', 'span');
let hard = createElement('span', '4x4', 'span');
let otherSize = createElement('span', 'other size: ', 'span');
let btn1 = createElement('button', '3x3', 'span__btn');
let btn2 = createElement('button', '4x4', 'span__btn');
let btn3 = createElement('button', '5x5', 'span__btn');
let btn4 = createElement('button', '6x6', 'span__btn');
let btn5 = createElement('button', '7x7', 'span__btn');
let btn6 = createElement('button', '8x8', 'span__btn');
let hardBox = createElement('div', '', 'hard');

document.body.append(hardBox);
hardBox.append(frameSize, hard, otherSize, btn1, btn2, btn3, btn4, btn5, btn6);



betabeta(4, 4)


const spanBtn = document.querySelectorAll('.span__btn');

    spanBtn.forEach( (item, index) => {
        let i = index + 3;
        item.dataset.valueForFn = i;
        item.addEventListener('click', () => {
            let column = null;
            divContainer.removeChild;
             column = createElem(i, i); // Создание колоки
             console.log(column)
                divContainer.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
                divContainer.style.gridTemplateRows = `repeat(${column}, 1fr)`;
        });
    });



function createElem(a, b) {
    let arrowDivBox = [];
    let elem;
    let c = (a * b) - 1;
    for(let i = 0; i <= c ; i++) {
        elem = document.createElement('div');
        elem.className = 'box';
        arrowDivBox.push(elem);
        divContainer.append(elem);
    }
    return a
}





















function innerNumText(a, b) {
    let min = 1;
    let max = a * b;
    let arrowBox = document.querySelectorAll('.box');
    let nh
   /*  arrowBox.forEach(item => {
        i = randomNumbers(a, b);
        item.textContent = i;
        i = 0;
    }); */

    for(let i = 0; i < arrowBox.length; i++) {
        nh = randomNumbers(min, max);
        arrowBox[i].textContent = nh;
    }
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bla(a, b) {
    let min = 1;
    let max = a * b;
    let arrowText = [];

    for(let i = 1; i < max; i++) {
        arrowText.push(i)
    }
    console.log(arrowText)

    let randomNum = randomNumbers(min, max);

    let arrowBox = document.querySelectorAll('.box');
    let set = new Set();
    arrowBox.forEach( (item, index) => {
        if(index === randomNum) {
            item.textContent = `${arrowText.pop()}`;
        }
    })

}

function betabeta(a, b) {
    let arrowText = [];

    for(let i = 1; i < a*b; i++) {
        arrowText.push(i)
    }

    let arrowBox = document.querySelectorAll('.box');
    arrowBox.forEach( (item, index) => {
        
            item.textContent = `${arrowText[index]}`
            if(index === arrowText.length ) {
                item.textContent = '';
            }
    });
}






function createElement(element, textContent, className) {
    let item = document.createElement(element);
    item.textContent = textContent;
    item.className = className;
    return item
}

