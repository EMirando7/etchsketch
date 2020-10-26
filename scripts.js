const container = document.querySelector('.container');
for(let j = 0; j < 17; j++){  
    for(let i = 1 ; i < 17; i ++){
    const subContainers = document.createElement('div');
    subContainers.innerHTML = `<div class="contentClass">${i}</div>`;
    subContainers.classList.add('subs');
    subContainers.classList.add('noWrap')
    container.appendChild(subContainers);
        if(i === 1){
            subContainers.classList.remove('noWrap');
            subContainers.classList.add('wrap')
        }
        console.log(subContainers)
    }
}    




