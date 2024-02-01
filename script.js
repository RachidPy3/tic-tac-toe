let grid = new Array(9)
const holder = document.querySelector(".holder")

const div = document.createElement("div")
div.style.border = "1px black solid"
div.style.height = "20px"
div.style.width = "20px"

grid.forEach(()=>{
    holder.appendChild(div)
})
console.log(holder.childNodes)