let nome = prompt("Qual o seu nome")

alert(`Bem vindo ${nome}`);

function imc(peso, altura) {
    return (peso / (altura*altura)).toFixed(2)
}
console.log(imc(80, 1.80));