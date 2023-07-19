
const controle = document.querySelectorAll(".controle-ajuste") 

controle.forEach( (caracteristica) => {
    
    caracteristica.addEventListener("click", (evento) => {
        somaSubtrair(evento.target.textContent, evento.target.parentNode)

        // console.log(evento.target.parentNode)
        // console.log(evento.target.textContent)
    })
}

)

function somaSubtrair (operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if (operacao === '-'){ 
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}    