const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => console.log("oi"), digaOi("carla"), digaTchau())

function digaOi(nome){
    console.log(`olá, ${nome}`)
}

function digaTchau(){
    console.log("tchau")
} // as functions normais não são contabilizadas no console, apenas as arrow (nº de vezes clicadas)

// as anonimas serao executandas APENAS quando chamamos o click, sem conseguir usar outras

// ou seja, as arrow functions sao as famosas anonimas!!


