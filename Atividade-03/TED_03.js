

let nomes = ["Paul", "John", "George", "Ringo", "Yoko"]

console.log(nomes[2])

nomes.push("Dylan")

nomes.unshift("Joplin")

nomes.pop();

console.log(nomes);

let valores = [2,4,6,8];

let dobrado = valores.map((v, i, a) => {
    return v*2; 
});

console.log(dobrado)

let numeros = [1,3,5,7,9];

let maior = numeros.filter((v,i,a) => {
    return v>5;
});

console.log(maior)