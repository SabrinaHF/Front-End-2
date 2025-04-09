// QUESITO 06 - Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, 
// tempo em meses e taxa de juros mensal, fornecidos pelo usuário. 
// Utilize obrigatoriamente a função prompt() para coletar os valores necessários.
// Use a fórmula: M = C * (1+i)^t
// C = Capital inicial investido; i = Taxa de juros, em percentual; t = Tempo do investimento, em meses.
// Exiba o resultado com duas casas decimais.


let cap_inicial = parseFloat(prompt("Informe o valor do capital inicial: "));

let tempo = parseInt(prompt("Informe o tempo de investimento em meses: "));

let taxa_juros = parseFloat(prompt("Informe a taxa de juros mensal (%): "));

juros = taxa_juros/100;

function Montante(cap_inicial, juros, tempo){

    return cap_inicial * ((1+juros)**tempo);

}

document.getElementById("resultado").innerHTML = `
    <p>Capital inicial: R$ ${cap_inicial.toFixed(2)}</p>
    <p>Tempo em meses: ${tempo}</p>
    <p>Taxa de juros mensal: ${taxa_juros}%</p>
    <p>Retorno do investimento: R$ ${Montante(cap_inicial, juros, tempo).toFixed(2)}</p>
`;
