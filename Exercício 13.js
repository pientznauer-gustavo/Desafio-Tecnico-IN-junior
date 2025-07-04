let time = [];

function adicionarJogador(nome, idade, posicao, pontuacao){
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
}

function buscarPorPosicao(posicao) {
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao.toLowerCase() === posicao.toLowerCase()) {
            console.log("Nome:", time[i].nome);
            console.log("Idade:", time[i].idade);
            console.log("Posição:", time[i].posicao);
            console.log("Pontuação:", time[i].pontuacao);
            console.log("--------------------------");
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("Nenhum jogador encontrado nessa posição.");
    }
}

function listarTime() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
    } else {
        for (let i = 0; i < time.length; i++) {
            console.log("Nome:", time[i].nome);
            console.log("Idade:", time[i].idade);
            console.log("Posição:", time[i].posicao);
            console.log("Pontuação:", time[i].pontuacao);
            console.log("--------------------------");
        }
    }
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < time.length; i++) {
        soma += time[i].pontuacao;
    }

    let media = soma / time.length;
    console.log("Pontuação média do time:", media.toFixed(2));
}


let opcao;

    do {
        console.log("\nMenu:");
        console.log("1 - Adicionar jogador");
        console.log("2 - Buscar por posição");
        console.log("3 - Listar time");
        console.log("4 - Calcular pontuação média");
        console.log("5 - Sair");

        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                const nome = prompt("Nome: ");
                const idade = parseInt(prompt("Idade: "));
                const posicao = prompt("Posição: ");
                const pontuacao = parseFloat(prompt("Pontuação: "));
                adicionarJogador(nome, idade, posicao, pontuacao);
                break;
            case '2':
                const buscaPosicao = prompt("Informe a posição para buscar: ");
                buscarPorPosicao(buscaPosicao);
                break;
            case '3':
                listarTime();
                break;
            case '4':
                calcularPontuacaoMedia();
                break;
            case '5':
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }

    } while (opcao !== '5');
