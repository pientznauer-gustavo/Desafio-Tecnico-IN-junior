let tamanho = parseInt(prompt("Quantos números deseja incluir no vetor?"));
let vetor = [];
let combo = 0;
for(let i = 0; i< tamanho; i++){
    vetor[i] = parseInt(prompt(`Digite o ${i + 1}º número`))
}

console.log(vetor);

for(let j = 0; j<vetor.length; j++){
    if(vetor[j] < vetor[j + 1]){
        combo += 1;
    }
}

console.log(combo);