
var nome = prompt("Digite seu nome.")
var altura = Number(prompt("Digite sua altura em centímetros."));
var peso = Number(prompt("Digite seu peso."));
altura = altura / 100;

var imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc <= 16){
    console.log(`Baixo peso muito grave      :(`)
}

else if (imc > 16 && imc <= 16.99) {
    console.log(`Baixo peso grave      :/`)
}

else if (imc > 17 && imc <= 18.49){
    console.log(`Baixo peso      :|`)
}

else if (imc > 18.5 && imc <= 24.99){
    console.log(`Peso normal       ;)`)
}

else if (imc > 25 && imc <= 29.99){
    console.log(`Sobrepeso      :|`)
}

else if (imc > 30 && imc <= 34.99){
    console.log(`Obesidade grau I     :/`)
}

else if (imc > 35 && imc <= 39.99){
    console.log(`Obesidade grau II    :(`)
}

else {
    console.log(`Obesidade grau III     T.T`)
};