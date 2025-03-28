

function calcularTotal(preco, qtd){

    return preco*qtd;

}


function aplicarDesconto(v_total){

    if (v_total>100){
        return v_total-(v_total*0.1);
    }else{
        return v_total;
    }
}


function exibirResumo(preco, qtd){

    let total = calcularTotal(preco,qtd);
    let total_desconto = aplicarDesconto(total);

    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
    console.log(`Valor total da compra com desconto: R$ ${total_desconto.toFixed(2)}`);

}

let preco = Number(prompt("Informe o preço do produto: "));
let qtd = Number(prompt("Informe a quantidade de produto: "));
exibirResumo(preco, qtd);