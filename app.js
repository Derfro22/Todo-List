// const myArr = [1, true, "hello"];
// const myStringFromArr = JSON.stringify(myArr);

// console.log(myStringFromArr);

// // Will log the string : "[1, true, 'hello']". This is a string !

// myArrBackFromStr = JSON.parse(myStringFromArr);

// console.log(myArrBackFromStr);

// // Will log the array [1, true, 'hello']. This is an array !

// Get the existing todos from localStorage, or an empty array if none exists



let todos = JSON.parse(localStorage.getItem('todos')) || [];
const taskList = document.querySelector("#todo-list");

// Function to save todos to localStorage
function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById('add-todo');
    const newTodo = todoInput.value.trim();

    if (newTodo !== '') {
        const newTodoItem = {
            id: new Date().getTime(),
            content: newTodo
        };

        todos.push(newTodoItem);
        renderTodos();
        saveTodosToLocalStorage();
        todoInput.value = '';
    }
}

// Function to render todos
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.content;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'delete';
        deleteBtn.addEventListener("click", function () {
            deleteTodo(todo.id);
        });

        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);
    });
}

// Function to delete a todo by id
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    saveTodosToLocalStorage();
}


const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTodo);

renderTodos();
