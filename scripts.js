const container = document.querySelector('.container');
const btn = document.createElement('button');
btn.addEventListener('click', function getNumber() {
    let answer = prompt('Hey guy/gal, how many squares per side?');
    runGame(answer);
})
document.body.insertBefore(btn, container);


function runGame(foo) {
    // debugger;
    for(let j = 0; j < foo; j++){ 
        for( let i = 0;  i < foo; i ++){
            const subContainers = document.createElement('div');
            subContainers.classList.add('subs');
            container.appendChild(subContainers);
            subContainers.addEventListener('mouseenter', () => {
            subContainers.classList.add('cellColor')
            })
        }
        let wrapCell = document.createElement('div');
        wrapCell.classList.add('wrap');
        container.appendChild(wrapCell)
        container.lastChild.classList.add('wrap');
        container.lastChild.classList.remove('subs')
    }    
}

runGame(11)