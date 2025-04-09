// QUESITO 05 - Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido. 
// Utilize obrigatoriamente a função prompt() para coletar o tamanho do raio.



let raio = parseFloat(prompt("Informe o raio do círculo em metros: "));

function areaCirculo(raio){

    return Math.PI * raio * raio;
    
}

function perimetroCirculo(raio){

    return Math.PI * raio * 2;
    
}

document.getElementById("resultado").innerHTML = `
    <p>Raio do círculo: ${raio.toFixed(2)} m</p>
    <p>Área do círculo: ${areaCirculo(raio).toFixed(2)} m²</p>
    <p>Perímetro do círculo: ${perimetroCirculo(raio).toFixed(2)} m</p>
`;
