let grid = []
const holder = document.querySelector(".holder")
const h1 = document.querySelector("h1")
let isX = true
let scoringGrid = Array(9).fill("")

holder.style.display = "grid";
holder.style.gridTemplateColumns = "repeat(3, 20px)";
holder.style.gridTemplateRows = "repeat(3, 20px)";
holder.style.gap = "5px"

function createDiv() {
    const div = document.createElement("div")
    div.style.border = "1px black solid"
    div.style.height = "20px"
    div.style.width = "20px"
    div.style.display = "inline-block"
    div.style.lineHeight = "20px"
    div.style.textAlign = "center"
    return div
}

function resetGame() {
    scoringGrid.fill("");
    grid.forEach(div => {
        div.textContent = "";
    });
    h1.textContent = "Winner is"
    isX = false;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (scoringGrid[a] && scoringGrid[a] === scoringGrid[b] && scoringGrid[a] === scoringGrid[c]) {
            return scoringGrid[a];
        }
    }
    return null;
}

function fillElem(event) {
    if (event.target.textContent === "") {
        event.target.textContent = isX ? "x" : "o"
        scoringGrid[+event.target.getAttribute("index")] = event.target.textContent
        const winner = checkWinner();
        if (winner) {
            h1.textContent += `${winner}`
            setTimeout(() => {
                console.log("waiting");
                resetGame();
            }, 1000);
        } else if (!scoringGrid.includes("")) {
            h1.textContent = "It's a draw!"
            setTimeout(() => {
                console.log("waiting");
                resetGame();
            }, 1000);
        }
        isX = !isX
    }
    console.log(scoringGrid);
}

function fillArray() {
    for (let i = 0; i < 9; i++) {
        const newDiv = createDiv()
        newDiv.setAttribute("index", i)
        newDiv.addEventListener("click", fillElem)
        grid.push(newDiv)
    }
}
fillArray()
grid.forEach((elem) => {
    holder.appendChild(elem)
})
