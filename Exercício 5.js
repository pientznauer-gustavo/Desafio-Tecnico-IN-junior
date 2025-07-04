let x = parseInt(prompt("Digite X"));

while (isNaN(x)) {
    x = parseInt(prompt("Valor inválido! Digite um número inteiro:"));
}

if (x % 3 == 0 && x % 5 == 0){
    console.log("fizzbuzz")
} else if(x % 3 == 0){
    console.log("fizz")
} else if(x % 5 == 0){
    console.log("buzz")
}