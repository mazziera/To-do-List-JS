const addButton = document.getElementById('botao-adicionar');
const result = document.getElementById('resultado');

// Cria um array vazio para armazenar os objetos de tarefa
let tasks = [];

function addTask() {
    addButton.addEventListener("click", () => {
        const inputTask = document.getElementById('tarefa-input').value;

        // Cria um novo objeto "nova tarefa"
        const newTask = {
            id: tasks.length + 1, // Gera um id incremental a partir do array tasks
            taskName: inputTask // Define a string da tarefa
        };

        // Adiciona o objeto ao array de tarefas
        tasks.push(newTask)

        // O objeto newTask é passado como parâmetro para adicionar a nova tarefa à lista HTML(ul)
        addTaskToList(newTask)
    });
}

// função para adicionar a nova tarefa à lista HTML (ul)
function addTaskToList(task) {
    //o parâmetro "task" é o objeto nova tarefa contendo as propriedades id e taskName

    // Cria um novo elemento li
    const newTaskItem = document.createElement("li")
    newTaskItem.classList.add("item-style")

    const taskText = document.createElement("span")
    taskText.textContent = task.taskName
    newTaskItem.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    result.appendChild(deleteButton)



    // Define o texto da tarefa como o conteúdo do elemento li
    newTaskItem.textContent = task.taskName
    
    

    // Adiciona o elemento li à lista result (ul)
    result.appendChild(newTaskItem)
};




addTask();