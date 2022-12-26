let container = document.querySelector('.container');
let counter = 1;

for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        let grid = document.createElement('div');
        grid.classList.add("grid");
        grid.classList.add(`${counter}`);
        grid.addEventListener('mouseover', () =>{grid.style.backgroundColor = "rgb(80,80,80)"});
        container.appendChild(grid);
        counter++;

    }
}
