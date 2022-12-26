let container = document.querySelector('.container');
let dropDown = document.querySelector('#gridSizes');
let counter = 1;
let size = 0;
let prevSize = 0;
let gridSpace = 0;      //width and height of grid plus margin as % value of parent node
let gridSize = 0;       //width and height of grid without margin as % value
let gridMargin = 0;     //width and height of grid's margin as % value

function changeGrid(){
    counter = 1;
    prevSize = size;
    size = dropDown.value;
    
    let prevGrids = document.querySelectorAll(".grid");

    prevGrids.forEach((grid) => {container.removeChild(grid);})

    gridSpace = 100/size;
    gridMargin = gridSpace*0.04;
    gridSize = gridSpace - gridMargin;

    for (let i = 1; i <= size; i++){
        for (let j = 1; j <= size; j++){
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.classList.add(`${counter}`);
            grid.style.width = `${gridSize}%`;
            grid.style.height = `${gridSize}%`;
            grid.style.margin = `${gridMargin/2}%`;
            grid.addEventListener('mouseover', () =>{grid.style.backgroundColor = "rgb(80,80,80)"});
            container.appendChild(grid);
            counter++;
        }
    }

}

for (let i = 1; i <= 100; i++){
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    dropDown.add(option);
}



dropDown.addEventListener('change', changeGrid);

