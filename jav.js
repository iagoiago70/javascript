let botaoVermleho = document.getElementById("vermelho")

let botaoVerde = document.getElementById("verde")

function mudaCorFundo(cor){
    document.body.style.backgroundColor = cor
}

botaoVermelho.add("click", function(){
    mudaCorFundo("red")
})

botaoVerde.addEventListener("click", function(){
    mudaCorFundo("green")
})