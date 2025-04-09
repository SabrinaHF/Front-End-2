// QUESITO 04 - Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-seque:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. 
// Faça um programa que determineo salário atual desse funcionário.
// d. Após concluir isto, faça uma segunda versão do seu código que permita o usuário informar o salário inicial do funcionário. 
// Utilize obrigatoriamente a função prompt() para coletar o salário inicial.

let salario = 1000;
let aumento = 0.015; 
let ano = 1996;
let ano_atual = 2025;


salario += salario * aumento;

let sal_inicial = prompt(`Informe o salário inicial do funcionário:`);

for (ano = 1997; ano <= ano_atual; ano++) {
    aumento *= 2; 
    salario += salario * aumento; 
}

console.log(`Salário atual do funcionário: R$ ${salario.toFixed(2)}`);
console.log(`Percentual de aumento acumulado: ${aumento}%`)

