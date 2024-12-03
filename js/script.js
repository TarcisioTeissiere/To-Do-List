const adicionar = document.querySelector('[name="btnAdicionar"]'); // Seleciona o botão corretamente
const receber = document.getElementById('tarefa'); // Input da tarefa
const apresentar = document.getElementById('mostrar'); // Elemento onde as tarefas serão mostradas
let guardartarefas = []; // Array para armazenar as tarefas

adicionar.addEventListener('click', adicionarTarefa); // Adiciona evento de clique ao botão adicionar

function adicionarTarefa(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    if (receber.value) { // Verifica se o campo de entrada não está vazio
        guardartarefas.push(receber.value); // Adiciona a nova tarefa no array guardartarefas
        receber.value = ''; // Limpa o campo de entrada após adicionar
        renderizarTarefas(); // Atualiza a lista de tarefas exibida
    } else {
        alert("Preencha o campo..."); // Mensagem de alerta se o campo estiver vazio
    }
}

function renderizarTarefas() {
    apresentar.innerHTML = ''; // Limpa o conteúdo atual
    const lista = document.createElement('ul'); // Cria uma lista <ul> para exibir as tarefas
    guardartarefas.forEach((tarefa, index) => {
        const item = document.createElement('li'); // Cria um item de lista <li> para cada tarefa
        item.textContent = `${index + 1}. ${tarefa}`; // Adiciona numeração e o texto da tarefa

        // Cria um botão de excluir para cada tarefa
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.style.marginLeft = '10px'; // Adiciona um pouco de espaçamento
        botaoExcluir.addEventListener('click', () => excluirTarefa(index)); // Liga o botão à função excluirTarefa

        item.appendChild(botaoExcluir); // Adiciona o botão de excluir ao item da lista
        lista.appendChild(item); // Adiciona o item de tarefa à lista
    });
    apresentar.appendChild(lista); // Adiciona a lista completa ao elemento de exibição
}

function excluirTarefa(indice) {
    // Confirmação para o usuário antes de excluir a tarefa
    const confirmar = confirm(`Tem certeza que deseja excluir a tarefa "${guardartarefas[indice]}"?`);
    if (confirmar) {
        guardartarefas.splice(indice, 1); // Remove a tarefa do array guardartarefas no índice especificado
        renderizarTarefas(); // Atualiza a lista de tarefas exibida
    }
}
