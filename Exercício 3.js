function verificarIdades(nasci){
    let year =parseInt(prompt("Que ano estamos?"));
    let maioridade = [];

    for(let i = 0; i < nasci.length; i++){
        if (year - nasci[i] >= 18){
            maioridade.push("Maior")
        } else{
            maioridade.push("Menor")
        }
    }

    for(let j = 0; j < maioridade.length; j++ ){
        console.log(`Pessoa ${j + 1}: ${maioridade[j]} de idade`)
    }
}


