const container = document.querySelector(".container");

createGrid(40);


function createGrid(dimension){
    const grid = document.createElement("div") ;
    grid.className = "grid";
    container.appendChild(grid);
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div")
        row.className = `row ${i}`;
        grid.appendChild(row);
        for (let i = 0; i < dimension; i++){
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell)
            cell.addEventListener("mouseenter", () => {cell.style.backgroundColor = "black"});
        }
    }
}

function resetBgColor (cell) {
    cell.style.backgroundColor = "white";
}   

// function changeCellColor (cell) {
//     console.log();
//     cell.style.backgroundColor = "black";
// }


// const reset = document.querySelector(".reset")

// reset.addEventListener("click", function(cell){
//     grid.remove()
// })

// trying to work out how to reset the grid to all white squares when pressing the reset button
