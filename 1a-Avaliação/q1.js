// QUESITO 01 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
// e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. 
// Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale 
// a população do país B, mantidas as taxas de crescimento. 

let populacao_A = 80000;
let populacao_B = 200000;
let anos = 0;

while(populacao_A<populacao_B){

    populacao_A += populacao_A * 0.03;
    populacao_B += populacao_B * 0.015;
    anos++;

}

console.log("Serão necessários %d anos para que a população do país A ultrapasse/iguale a população do país B.", anos);