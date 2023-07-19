const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const braco = document.querySelector("#bracos")

somar.addEventListener("click", () => {
    braco.value = Number(braco.value) + 1
    })

subtrair.addEventListener("click", () => {
        braco.value = Number(braco.value) - 1
    })

