let altura = [];
let genero = [];
let qtd_fem = 0, qtd = 0, soma = 0;
let maior = 0, menor = 4;
let media;

for (let i = 0; i<3; i++){
        
    let alturaInput = prompt("Informe sua altura: ");
    altura.push(Number(alturaInput));

    let generoInput = prompt("Informe seu gênero (feminino ou masculino): ");
    genero.push(generoInput);

    if (altura[i]>maior){
        maior = altura[i];
    }
    
    if(altura[i]<menor){
        menor = altura[i];
    }

    if (genero[i] === "masculino"){
        soma += altura[i];
        qtd += 1;
    }else{
        qtd_fem += 1;
    }
}

if (qtd>0){
    media = soma/qtd;
}else{
    media = 0;   
}


console.log("-----------")
console.log("- A maior altura do grupo: " + maior);
console.log("- A menor altura do grupo: " + menor);
console.log("- Média de altura das pessoas do gênero masculino: " + media)
console.log("- Número de pessoas do gênero feminino: " + qtd_fem)
console.log("-----------")