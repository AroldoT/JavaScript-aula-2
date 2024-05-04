
var num3 = Number(prompt("Digite um numero."));
var count = 0;
var count1 = 0;

while (count <= num3){
    if (num3 % count == 0){
        count1++
    };
    count++
};

if (count1 == 2){
    console.log(`O número é primo.`)
}

else {
    console.log(`O número não é primo.`)
}

