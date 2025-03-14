const container = document.querySelector(".container");

createGrid(40);


function createGrid(dimension){
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div")
        row.className = `row ${i}`;
        container.appendChild(row);
        for (let i = 0; i < dimension; i++){
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("mousedown", () => {cell.style.backgroundColor= "black"})
            row.appendChild(cell)
        }
    }
}



    