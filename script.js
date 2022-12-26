let container = document.querySelector('.container');
let rowSize = document.querySelector('#rowSize');
let colSize = document.querySelector('#colSize');
let counter = 1;
let rows = 0;
let cols = 0;
let gridWidthSpace = 0;      //width of grid plus margin as % value of parent node
let gridWidthSize = 0;       //width of grid without margin as % value
let gridMargin = 0;     //width and height of grid's margin as % value
let gridHeightSpace = 0;
let gridHeightSize = 0;

function changeGrid(){
    counter = 1;
    rows = rowSize.value;
    cols = colSize.value;
    
    let prevGrids = document.querySelectorAll(".grid");

    prevGrids.forEach((grid) => {container.removeChild(grid);})

    gridWidthSpace = 100/cols;
    gridMargin = gridWidthSpace*0.04;
    gridHeightSpace = 100/rows;
    gridHeightSize = gridHeightSpace - gridMargin;
    gridWidthSize = gridWidthSpace - gridMargin;

    for (let i = 1; i <= rows; i++){
        for (let j = 1; j <= cols; j++){
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.classList.add(`${counter}`);
            grid.style.width = `${gridWidthSize}%`;
            grid.style.height = `${gridHeightSize}%`;
            grid.style.margin = `${gridMargin/2}%`;
            grid.addEventListener('mouseover', () =>{grid.style.backgroundColor = "rgb(80,80,80)"});
            container.appendChild(grid);
            counter++;
        }
    }
}

for (let i = 1; i <= 100; i++){
    let rowOptions = document.createElement("option");
    rowOptions.value = i;
    rowOptions.text = i;

    let colOptions = document.createElement("option");
    colOptions.value = i;
    colOptions.text = i;

    rowSize.add(rowOptions);
    colSize.add(colOptions);
}

rowSize.addEventListener('change', changeGrid);
colSize.addEventListener('change', changeGrid);
