// QUESITO 02 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares 
// e a quantidade de números ímpares. Utilize obrigatoriamenteafunção prompt() para coletar os números.

let num;
let par = 0;
let impar = 0;
let numeros = [];

for (let i = 0; i<10; i++){

    num = parseInt(prompt(`Informe o ${i+1}º número inteiro:`));
    numeros.push(num);
    
    if(num % 2 == 0){
        par++;
    }else{
        impar++;
    }

}

document.getElementById("resultado").innerHTML = `
    <p>Números informados: ${numeros.join(", ")}</p>
    <p>Quantidade de números pares: ${par}</p>
    <p>Quantidade de números ímpares: ${impar}</p>
`;