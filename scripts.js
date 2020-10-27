const container = document.querySelector('.container');
for(let j = 0; j < 16; j++){  
    for(let i = 1 ; i < 17; i ++){
    const subContainers = document.createElement('div');
    subContainers.classList.add('subs');
    container.appendChild(subContainers);
    }    
}    




