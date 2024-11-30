// Создаем массив для хранения задач

let tasks = [];

// Проверяем есть ли в списке задачи и выводим, если есть
function displayTasks() {
if (tasks.length === 0) {
    console.log("Ваш список задач пуст");
} else {
    tasks.forEach((task, index) => {
        let status = task.completed ? "выполнена" : "не выполнена";
        console.log(`${index + 1} - ${task.name}: ${status}`);
    });
    }        
}

// Функция для добавления новой задачи
function addTask() {
    let name = prompt("Введите название задачи:"); 
    if (name === null) {
        return;
    } else if (name.trim() === "") {
        console.log("Название задачи не может быть пустым.");
        return;
    }
    let newTask = {
        name: name,
        completed: false
    };
    tasks.push(newTask);
    console.log(`Задача "${name}" добавлена.`);
    updatedList();
    displayTasks();
}

// Функция для удаления задачи
function deleteTask() {
    let taskName = prompt("Введите название задачи для удаления:");
    if (taskName === null) {
        return;
    }
    let index = tasks.findIndex(task => task.name === taskName.trim());
    
    if (index === -1) {
        console.log(`Нет задачи с названием "${taskName}"`);
        return; 
    } else {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Задача "${deletedTask[0].name}" удалена.`);
    }
    updatedList();
    displayTasks();
}

function completeTask() {
    let taskName = prompt("Введите название задачи, которую хотите выполнить:");
    if (taskName === null) {
        return;
    }
    let index = tasks.findIndex(task => task.name === taskName.trim());

    if (index === -1) {
        console.log(`Нет задачи с названием "${taskName}"`);
        return; 
    } else {
        tasks[index].completed = true;
        console.log(`Задача "${tasks[index].name}" отмечена как выполненная.`);
    }
    updatedList();
    displayTasks();
}

function updatedList() {
    console.log("Ваш обновленный список задач:\n");
}
// Предалагаем выбор: добавить, удалить, посмотреть, выполнить задачи
function actionSelection(ch) {

switch(ch) {
    case "1": 
        addTask();
        break;
  
    case "2": 
        deleteTask();
        break;
  
    case "3": 
        if (tasks.length === 0) {
            console.log("Ваш список задач пуст");
        } else {
            displayTasks();
        }
        break;

    case "4": 
        completeTask();
        break;

  }
}

let choice = 0;

while (choice != "5") {
    choice = prompt("Что хотите сделать (введите номер):\n 1 - Добавить задачу\n 2 - Удалить задачу\n 3 - Показать список\n 4 - Отметить задачу как выполненную\n 5 - Ничего не хочу");
    if (choice === null) {
        choice = "5";
    } else if (!["1", "2", "3", "4", "5"].includes(choice)) { 
        console.log("Нет такого номера в списке. Пожалуйста, введите число от 1 до 5.");
        continue;
    }


    actionSelection(choice);
}
console.log("До новых встреч!");
