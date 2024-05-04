var cont = 0

while (cont == 0){    
    
    console.log("Menu");
    console.log("1 - Área do Triagulo");
    console.log("2 - Área do Retângulo");
    console.log("3 - Área do Cubo");
    console.log("4 - Área do Círculo");
    console.log("5 - Sair");
    var area = 0;
    var escolha = Number(prompt("Escolha uma das opções."));

    if (escolha == 5){
        cont++
    }
    else if (escolha == 1){
        let baseT = Number(prompt("Digite o valor da base do triangulo."))
        let alturaT = Number(prompt("Digite o valor da altura do triangulo."))
        area = baseT * alturaT / 2
        console.log(`A área do triangulo é: ${area.toFixed(2)}`)
    }
    
    else if (escolha == 2){
        let baseR = Number(prompt("Digite o valor da base do retângulo."))
        let alturaR = Number(prompt("Digite o valor da altura do retângulo."))
        area = baseR * alturaR
        console.log(`A área do retângulo é: ${area.toFixed(2)}`)
    }
    
    else if (escolha == 3){
        let baseC = Number(prompt("Digite o valor da base do triangulo."))
        area = baseC * baseC * baseC
        console.log(`A área do cubo é: ${area.toFixed(2)}`)
    }

    else if (escolha == 4){
        let raio = Number(prompt("Digite o valor da base do triangulo."))
        area = raio * raio *3,14
        console.log(`A área do cubo é: ${area.toFixed(2)}`)
    }

    else {
        console.log("Sua escolha está inválida.")
    };
};

console.log("Você encerrou as operações.");