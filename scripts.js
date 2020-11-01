//~~~~~~~~~~~~~~~~~~~~~~~CONSTANTS~~~~~~~~~~~~~~~~~
const container = document.querySelector('.container');
const body = document.querySelector('body');

// ~~~~~~~~~~~~~~~~~~~~~~ADD BUTTONS ~~~~~~~~~~~
function addButtons() {
    for(let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        document.body.insertBefore(btn, container)
    }
    body.children[0].textContent = "Change Size";
    body.children[0].addEventListener('click', () => startGame());
    body.children[1].textContent = "Clear Colors";
    body.children[1].addEventListener('click', () => wipeGrid());
    body.children[2].textContent = "Colorized";
    body.children[2].addEventListener('click', () => randomColor());
}

// ~~~~~~~~~~~~~~ Help Func ~~~~~~~~~~~~~~~
// Ask for input
function startGame() {
    wipeGrid();
    container.innerHTML = '';
    let userInput = prompt("How many squares each side? Only number from 1-100");
    createGrid(userInput);
}

// Create the columns & add squares
function createGrid(num){
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    for(let j = 0 ; j < num; j++){
        for(let i = 0; i < num; i ++){
            let div = document.createElement('div');
            div.classList.add('sqs');
            div.style.border = 'solid 0.2px';
            div.style.backgroundColor = '#f5cdc1';
            div.addEventListener('mouseenter', () => div.style.backgroundColor = 'black')
            container.appendChild(div);
        }
    }
}

// clear color from squares
function wipeGrid() {
    for(div of document.querySelectorAll('.sqs')){
        div.style.backgroundColor =  '#f5cdc1';
    }
}
// change color
function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const squares = document.querySelectorAll('.sqs');
    for(let i = 0; i < squares.length; i ++){

        if(squares[i].style.backgroundColor == 'black') {
            squares[i].style.backgroundColor = `#${randomColor}`
        }
    }
}

createGrid(16)
addButtons();