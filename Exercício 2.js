let x;
let fat = 1;
let check = "S";



while(check.toLowerCase() == "s"){
    let x = parseInt(prompt("Qual valor de x?"));

    while (isNaN(x) || x < 0) {
        x = parseInt(prompt("Valor inválido! Digite um número inteiro positivo:"));
    }
    fat = 1;
    for(let i = x; i>0; i--){
        fat *= i;
        
    }
    console.log(fat)
    check = prompt("Quer continuar? (S/N)")
}


