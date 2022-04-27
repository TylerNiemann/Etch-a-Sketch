const container = document.querySelector('#container');

function createGrid(gridSize){
    for(let i = 0; i< gridSize; i++){
        const row = container.appendChild(document.createElement('div'));
        for(let j = 0; j < gridSize; j++){
            const box = row.appendChild(document.createElement('div'));
            box.classList.add('box')
        }
    }
}

createGrid(16);

const grid = document.querySelectorAll('div > div');
grid.forEach(box => box.addEventListener('mouseover', function(e){
     e.target.style.backgroundColor = 'black';
}));