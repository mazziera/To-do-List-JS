const addButton = document.getElementById('botao-adicionar');
const resultContainer = document.getElementById('resultado');

// Evento do botão adicionar
addButton.addEventListener("click", () => {
    createTask();
});

const createTask = () => {
    // Obtendo o valor digitado pelo usuário
    const newTaskText = document.getElementById('tarefa-input').value;

    // Criando o elemento label que irá envolver elementos html da tarefa
    const taskLabel = document.createElement('label');
    taskLabel.innerHTML = `
        <input type="checkbox" class="checkbox-marked">${newTaskText}
        <button class="editButton">Editar</button>
        <button class="deleteButton">Deletar</button>
    `;

    // Função deletar tarefa
    deleteTask(taskLabel);

    // Função editar tarefa
    editTask(taskLabel);

    // Função concluir tarefa
    finishTask(taskLabel);

    // Adicionando o elemento label criado dinamicamente ao documento html
    resultContainer.appendChild(taskLabel);
};

// Deletar tarefa
const deleteTask = (taskLabel) => {
    // Obtendo o botão de deletar dentro da tarefa
    const deleteButton = taskLabel.querySelector('.deleteButton');
    deleteButton.addEventListener("click", () => {
        taskLabel.remove();
    });
};

// Editar tarefa
const editTask = (taskLabel) => {
    const editButton = taskLabel.querySelector('.editButton');
    editButton.addEventListener("click", () => {
        // Lógica para edição da tarefa
    });
};

// Concluir tarefa
const finishTask = (taskLabel) => {
    const taskCompleted = taskLabel.querySelector('.checkbox-marked');
    taskCompleted.addEventListener('click', () => {
        taskLabel.classList.toggle('task-checked'); // Use toggle para alternar a classe
    });
};
