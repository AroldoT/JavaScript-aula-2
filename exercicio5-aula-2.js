var num2 = Number(prompt("Digite um número correspondente ao dia da semana."));

switch (num2) {                          
    case 1:
        console.log(`Domingo`)
        break;
    case 2:
        console.log(`Segunda`)
        break;
    case 3:
        console.log(`Terça`)
        break;
    case 4:
        console.log(`Quarta`)
        break;
    case 5:
        console.log(`Quinta`)
        break;
    case 6:
        console.log(`Sexta`)
        break;
    case 7:
        console.log(`Sábado`)
        break;

    default:
        console.log(`ão é um valor válido`)
        break;
};

