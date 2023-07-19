const controle = document.querySelectorAll("[data-controle]") // array

const estatisticas = document.querySelectorAll("[data-estatistica]") // recupera os elementos com esse data attributes

// as peças montam as estatísticas

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (caracteristica) => {
    
    caracteristica.addEventListener("click", (evento) => {
        somaSubtrair(evento.target.dataset.controle, evento.target.parentNode)

        atualizaEstatistica(evento.target.dataset.peca) // vai localizar no html qual peca foi clicada
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

function atualizaEstatistica(peca){
    console.log(pecas[peca]) // dentro do objeto pecas, vamos buscar os elementos 

    // ex: braco + 1, retorna -> {forca: 29, poder: 35, energia: -21, velocidade: -5}

    estatisticas.forEach((atualizarElementoEstatisticas) => {

        console.log(atualizarElementoEstatisticas.dataset.estatistica) // estatistica = data-estatistica

        // forca: <p class=​"estatistica-numero" data-estatistica=​"forca">​768​</p>​
        // poder: <p class=​"estatistica-numero" data-estatistica=​"poder">​630​</p>​
        // energia: <p class=​"estatistica-numero" data-estatistica=​"energia">​289​</p>​
        // velocidade: <p class=​"estatistica-numero" data-estatistica=​"velocidade">​597​</p>​

        console.log(atualizarElementoEstatisticas) // assim, percorremos os números nas estatísticas quando clicamos em uma peça

        // ex: braco + 1, retorna ->
        // <p class=​"estatistica-numero" data-estatistica=​"forca">​768​</p>​
        // <p class=​"estatistica-numero" data-estatistica=​"poder">​630​</p>​
        // <p class=​"estatistica-numero" data-estatistica=​"energia">​289​</p>​
        // <p class=​"estatistica-numero" data-estatistica=​"velocidade">​597​</p>​
    })
}
// qual peça foi clicada?
