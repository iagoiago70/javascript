/* let peso = 80;
let altura = 1.80;

imc = peso / (altura * altura)

if (imc < 18.5) {  console.log("abaixo do peso")
    
} else if ( imc>=18.5 && imc<25) { console.log ("abaixo do peso");}
else if ( imc>=25 && imc<30) { console.log ("peso normal");}
else if ( imc>=30 && imc<40) { console.log ("obeso");}
else  { console.log ("obesidade grave");}
console.log(imc) */

function imc(peso,altura){ 
    valor = peso / (altura * altura)

if (valor < 18.5) {  return"abaixo do peso"
    
} else if ( valor>=18.5 && valor<24.9) { return "abaixo do peso";}
else if ( valor>=25 && valor<29.9) { return "peso normal";}
else if ( valor>=30 && valor<34.9) { return "obeso";}
else if ( valor>=35 && valor<39.9) { return "obeso grave";}
}

console.log(imc(70,1.70));
console.log(imc(88,1.63));