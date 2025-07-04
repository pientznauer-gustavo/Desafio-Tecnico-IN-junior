function inverte(str){
    return str.split("").reverse().join("");
}

let frase = prompt("Digite uma frase:")
let frase_tratada = frase.split(" ")
frase_tratada = frase_tratada.join("")
frase_tratada = frase_tratada.toLowerCase();
let palin = inverte(frase_tratada);
if(frase_tratada == palin){
    console.log("É palíndromo.")
} else{
    console.log("Não é palíndromo.")
}