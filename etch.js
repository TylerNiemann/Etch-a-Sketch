const container = document.querySelector('#container');

function createGrid(gridSize){
    for(let i = 0; i< gridSize; i++){
        const row = container.appendChild(document.createElement('div'));
    }
}
createGrid(5);