// // QUESITO 03 - Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let numero = [1,2,3,4,5];
let menor = Infinity;
let maior = -Infinity;
let soma = 0;

for (let i = 0; i<numero.length; i++){

    if(numero[i]<menor){
        menor = numero[i];
    } 

    if(numero[i]>maior){
        maior = numero[i];
    }

    soma += numero[i];

}

console.log("Conjunto dos números: ", numero)
console.log("Menor número: ", menor);
console.log("Maior número: ", maior);
console.log("Soma dos números: ", soma);