const addButton = document.getElementById('botao-adicionar');
const resultContainer = document.getElementById('resultado');

// Evento do botão adicionar tarefa
addButton.addEventListener("click", () => {
    createTask();
});

const createTask = () => {
    const newTaskText = document.getElementById('tarefa-input').value;
    // Evitar adicionar tarefas vazias
    if (newTaskText.trim() === ''){
        alert("Nenhuma tarefa detectada!")
        return 
    };

    // Criando o elemento label que irá envolver elementos html da tarefa
    const taskLabel = document.createElement('label');
    taskLabel.innerHTML = `
        <div class="tasks">
            <input type="checkbox" class="checkbox-marked">
            <span class="task-text">${newTaskText}</span>
            <div class="taskButtons">
                <button class="editButton">Editar</button>
                <button class="deleteButton">Deletar</button>
            </div>
        </div>
    `;

    deleteTask(taskLabel);  // Função deletar tarefa
    editTask(taskLabel); // Função editar tarefa
    finishTask(taskLabel); // Função concluir tarefa

    // Adicionando o elemento label criado dinamicamente ao documento html
    resultContainer.appendChild(taskLabel);
    document.getElementById('tarefa-input').value = ''; // Limpa o campo após adicionar a tarefa
};

// Deletar tarefa
const deleteTask = (taskLabel) => {
    // Capturando o botão de deletar dentro da tarefa
    const deleteButton = taskLabel.querySelector('.deleteButton');
    deleteButton.addEventListener("click", () => {
        taskLabel.remove();
    });
};

// Editar tarefa
const editTask = (taskLabel) => {
    const editButton = taskLabel.querySelector('.editButton');
    editButton.addEventListener("click", () => {

        const modal = document.querySelector('.modal-container');
        const blurToDoList = document.querySelector('.borrar-fundo');
        const editTaskInput = document.getElementById('editar-tarefa-input');
        const closeModalButton = document.getElementById('botao-cancelar');
        const saveButton = document.getElementById('botao-salvar');

        const currentTaskText = taskLabel.querySelector('.task-text');
        if (currentTaskText) {
            editTaskInput.value = currentTaskText.textContent.trim();

            // Abrir modal
            modal.classList.remove('esconder');
            blurToDoList.classList.remove('esconder');
            modal.classList.add('mostrar');

            if (closeModalButton) { // fechar modal -> cancelar edição
                closeModalButton.addEventListener("click", () => {
                    modal.classList.add('esconder');
                    blurToDoList.classList.add('esconder');
                });
            }

            // Salvar edição de tarefa
            saveButton.addEventListener("click", () => {

                // realiza a atualização do texto da tarefa após a edição
                currentTaskText.textContent = editTaskInput.value.trim(); 
                modal.classList.add('esconder');
                blurToDoList.classList.add('esconder');
                modal.classList.remove('mostrar');
            }, { once: true })
            
        }
    });
};

// Concluir tarefa
const finishTask = (taskLabel) => {
    const taskCompleted = taskLabel.querySelector('.checkbox-marked');
    taskCompleted.addEventListener('click', () => {
        const taskText = taskLabel.querySelector('.task-text');

        if (taskText) {
            taskText.classList.toggle('task-checked'); 
            // Usando toggle para alternar a classe no elemento <span>
        }
    });
};