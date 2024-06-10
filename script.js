let grid = []
const holder = document.querySelector(".holder")
let isX = true

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

function fillElem(event) {
    if (event.target.textContent === "") {
        event.target.textContent = isX ? "x" : "o"
        
        isX = !isX
    }
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
