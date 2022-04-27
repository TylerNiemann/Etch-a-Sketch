const container = document.querySelector('#container');

function toggleHover(){
    const grid = document.querySelectorAll('#container > div');
    grid.forEach(box => box.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}));
}

function createGrid(gridSize){
    if(gridSize <= 100){
        for(let i = 0; i< gridSize; i++){
            const row = container.appendChild(document.createElement('div'));
            for(let j = 0; j < gridSize; j++){
                const box = row.appendChild(document.createElement('div'));
                box.classList.add('box')
            }
        }
    }
    else alert('Please input a value equal to or less than 100');
}

function promptMe(){
    let gridSize = parseInt(prompt('Please provide size of grid'));
    reset();
    createGrid(gridSize);
    toggleHover();
};

function reset() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
      }
  }