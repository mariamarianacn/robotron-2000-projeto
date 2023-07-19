const controle = document.querySelectorAll("[data-controle]") 

controle.forEach( (caracteristica) => {
    
    caracteristica.addEventListener("click", (evento) => {
        somaSubtrair(evento.target.dataset.controle, evento.target.parentNode)

        // console.log(evento.target.parentNode)
        // console.log(evento.target.textContent) = texto do elemento lá no html (+) | quando usamos o dataSet estamos querendo utilizar o data Attributes postos no html (data-controle)
    })
}

)

function somaSubtrair (operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if (operacao === '-'){ 
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}    

// const controle = document.querySelectorAll(".controle-ajuste")

// controle.forEach( (elemento) => {
//     elemento.addEventListener('click', (evento) => {
//         manipulaDados(evento.target.textContent, evento.target.parentNode)
//     })
// })

// function manipulaDados(operacao, controle) {
//     const peca = controle.querySelector(".controle-contador")
//     if(operacao === "-") {
//         peca.value = parseInt(peca.value) - 1
//     } else { 
//         peca.value = parseInt(peca.value) + 1
//     }
// }