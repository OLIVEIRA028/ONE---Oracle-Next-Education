// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de entrada do nome do amigo
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Validação do nome
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.'); // Alerta caso o campo esteja vazio
        return;
    }

    // Tratamento para deixar a primeira letra e as letras após espaços em maiúsculas
    nomeAmigo = nomeAmigo
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (letra) => letra.toUpperCase());

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!'); // Alerta caso o nome já esteja na lista
        return;
    }

    // Adiciona o nome à lista de amigos
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de entrada
    atualizarListaAmigos(); // Atualiza a exibição da lista de amigos
    mostrarListaAmigos(); // Garante que a lista seja exibida
    limparResultado(); // Limpa o resultado do sorteio anterior
}

// Função para atualizar a exibição da lista de amigos
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Elemento da lista no HTML
    listaAmigosElement.innerHTML = ''; // Limpa a lista para evitar duplicações

    // Cria um item de lista para cada amigo e adiciona ao elemento da lista
    listaAmigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElement.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!'); // Alerta caso a lista esteja vazia
        return;
    }

    // Seleciona um amigo aleatoriamente
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o resultado do sorteio e oculta a lista de amigos
    exibirResultado(amigoSorteado);
    esconderListaAmigos();

    // Altera o texto e a funcionalidade do botão de sorteio
    alterarBotaoParaNovoSorteio();
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSorteado) {
    const resultadoElement = document.getElementById('resultado'); // Elemento do resultado no HTML
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior

    const mensagem = document.createElement('p');
    mensagem.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`; // Exibe o nome do amigo sorteado
    resultadoElement.appendChild(mensagem);
}

// Função para esconder a lista de amigos
function esconderListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.style.display = 'none'; // Oculta a lista
}

// Função para mostrar a lista de amigos
function mostrarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.style.display = 'block'; // Mostra a lista
}

// Função para limpar o resultado do sorteio
function limparResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Remove o resultado anterior
}

// Função para alterar o botão "Sortear" para "Novo Sorteio"
function alterarBotaoParaNovoSorteio() {
    const botaoSortear = document.getElementById('botaoSortear');
    botaoSortear.innerHTML = `
        Novo Sorteio
    `; // Altera o texto do botão
    botaoSortear.className = 'button-draw'; // Garante que as classes originais sejam mantidas
    botaoSortear.onclick = iniciarNovoSorteio; // Define a nova funcionalidade do botão
}

// Função para restaurar as configurações originais do botão e iniciar um novo sorteio
function iniciarNovoSorteio() {
    listaAmigos = []; // Reseta a lista de amigos
    atualizarListaAmigos(); // Atualiza a exibição da lista
    limparResultado(); // Limpa o resultado do sorteio

    mostrarListaAmigos(); // Exibe a lista novamente

    // Restaura o botão para sua funcionalidade original, incluindo o texto, ícone e classes
    const botaoSortear = document.getElementById('botaoSortear');
    botaoSortear.innerHTML = `
        <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
        Sortear amigo
    `; // Restaura o texto e o ícone do botão
    botaoSortear.className = 'button-draw'; // Mantém as classes do botão original
    botaoSortear.onclick = sortearAmigo; // Redefine o evento de clique para sortear
}
