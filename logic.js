function generateDivs(size = 64) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++){
            let alpha = 1;
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", (event) => {
                let target = event.target;

                target.style.backgroundColor = rgba(alpha);
                alpha -= 0.1;
                if (alpha < 0) {
                    alpha = 0;
                }
            });
            row.appendChild(square);
        }
    }
}

function rgba(a) {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    alpha = a;
    return ["rgba(",r,",",g,",",b,",",alpha,")"].join("");
}

function removeDivs() {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function startGame() {
    generateDivs();

    const button = document.querySelector("#amount");

    button.addEventListener("click", () => {
        let size = prompt("Enter the amount of squares you want. Max 100");
        if (size > 100) {
        size = 100;
        }
        removeDivs();
        generateDivs(size);
    });

}

startGame();

