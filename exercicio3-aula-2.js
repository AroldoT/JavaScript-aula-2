var idade = Number(prompt("Digite sua idade."));
var preco = Number(prompt("Digite o preço do produto."));

if (idade < 18){
    console.log(`O preço obteve desconto de 10% e fica em: R$ ${(preco - (preco/10)).toFixed(2)}`)
}

else {
    console.log(`O preço é R$ ${preco.toFixed(2)} sem descontos.`)
};
