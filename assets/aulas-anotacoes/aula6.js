
const controle = document.querySelectorAll("[data-controle]") 

controle.forEach( (caracteristica) => {
    
    caracteristica.addEventListener("click", (evento) => {
        somaSubtrair(evento.target.dataset.controle, evento.target.parentNode)

        // console.log(evento.target.parentNode)
        // console.log(evento.target.textContent)
    })
}

)

function somaSubtrair (operacao, controle){
    const peca = controle.querySelector("[data-controle]")

    if (operacao === '-'){ 
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}    


/*data-attributes permitem armazenar informações extras em elementos HTML. Sua utilização não é indicada para dados visíveis, pois tecnologias de acessibilidade podem não ler seus valores. Seus dados podem ser acessados e manipulados utilizando JavaScript, ou também para estilizar elementos HTML no CSS.*/