

function imposto (salariobruto){

if (salariobruto <= 1100) {
    return 0.05
    
} else if (salariobruto > 1100 && salariobruto <= 2000) {
    return 0.1
}
else if (salariobruto > 1100 && salariobruto <= 2500) {
    return 0.1
}
else if (salariobruto > 2500) {
    return 0.15
}
}
const salariobruto = 2000;
const benefico = 250;

const calcularimoposto = imposto(salariobruto) * salariobruto;
const salariofinal = salariobruto - calcularimoposto + benefico;
console.log (salariofinal);

