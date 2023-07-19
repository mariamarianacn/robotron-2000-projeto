const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const braco = document.querySelector("#bracos")

const caracteristicasDoRobo = document.querySelectorAll(".controle-ajuste") // são a quantd de braços, pernas... sendo selecionados // SÃO ARRAYS PARA O JS!!

caracteristicasDoRobo.forEach( (caracteristica) => {
    console.log(caracteristica) // vai mostrar onde há controle-juste
    
    caracteristica.addEventListener("click", (evento) => {
        console.log("funcionou!!")
        console.log(evento) // evento do fato de nós termos clicado!!
        console.log(evento.target) // mostra onde foi clicado, se clicar em bracos-somar vai aparecer
        console.log(evento.target.textContent) // TARGET DO HTML, O QUE ESTÁ ESCRITO NA PARTE REFERENCIADA, NO CASO DE BRACOS-SOMAR RETORNARÁ + // 
        somaSubtrair(evento.target.textContent) // HTML, O QUE ESTÁ ESCRITO NO CODIGO HTML SERÁ POSTO NA FUNCTION SOMASUBTRAIR, NO CASO DO BRACOS-SOMAR ELE ENCAIXARÁ O SINAL + COMO PARAMETRO
    })
}

)

// input = value
// texto = textContent

function somaSubtrair (operacao){
    if (operacao === '-'){ // POR ISSO QUE USAMOS O SINAL DE NEGATIVO OU POSITIVO, POIS NO HTML ESTÁ
        braco.value = Number(braco.value) - 1
    } else {
        braco.value = Number(braco.value) + 1
    }
}    

