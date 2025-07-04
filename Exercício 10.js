let fila = [];
let menu = "";

while(menu != "3"){
    let visual = "FILA: ";
    for(let i = 0; i<fila.length; i++){
        console.log(`${i + 1}º ${fila[i]}`);
    }

    console.log("1- - Novo Cliente: Adiciona um novo cliente ao final da fila");
    console.log("2 - Atender Cliente: Retira o primeiro cliente da fila");
    console.log("3 - Sair: Encerra o programa");
    menu = prompt("ESCOLHA UMA OPÇÃO:")

    if(menu == "1"){
        let nome = prompt("Digite o nome do cliente");
        fila.push(nome);
    } else if(menu == "2"){
        let nome = fila.shift();
        console.log(`Cliente ${nome} sendo atendido`)
    } else if(menu != "3"){
        alert("Comando inválido")
        
    }
}