function generateDivs(size = 64) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size/4; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size/4; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", (event) => {
                let target = event.target;

                target.setAttribute("style", "background-color: blue");
            });
            row.appendChild(square);
        }
    }
}

const squareContainer = document.querySelector("#container");

const button = document.querySelector("#amount");

button.addEventListener("click", () => {
    const size = prompt("Enter the amount of squares you want. Max 100");
    generateDivs(size);
});
