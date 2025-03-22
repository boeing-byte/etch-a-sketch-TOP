const container = document.querySelector(".container");
const reset = document.querySelector(".reset")
const grid = document.querySelector(".grid");
//dimension = prompt("How big do you want the grid? (Max 100 cells)")

reset.addEventListener("click", () => {
    const grid = document.querySelector(".grid");
    
    grid.remove();

    createGrid(getDimension());
})


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
            cell.style.width =  `${800/dimension}px`;
            cell.style.height = `${800/dimension}px`;
            row.appendChild(cell);
            cell.addEventListener("mouseenter", () => {cell.style.backgroundColor = randomRGBValue()});
        }
    }
}

function getDimension () {

    let dimension = prompt("How big? 20-100");
    dimension = Math.floor(dimension)
    console.log(`${dimension} = ${typeof dimension}`);
    if (isNaN(dimension)) {
        getDimension();
    } else if (dimension < 20 || dimension > 100 {
        getDimension()
    }
    return dimension;
    }

function randomRGBValue () {
    // generates a random rbg color string
    const r = (Math.floor(Math.random() * 255)).toString()
    const g = (Math.floor(Math.random() * 255)).toString()
    const b = (Math.floor(Math.random() * 255)).toString()
    return(`rgb(${r}, ${g}, ${b})`)
}

createGrid(getDimension());

// let x = "aaaf"
// console.log(typeof x)
// console.log(Math.floor(x))


