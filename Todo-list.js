let todoList = [];


function renderTodoList() {

    let todoListHtml = '';

        for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            const {name, dueDate} = todoObject;
            const html = `
            
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button class="delete-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button> 
            
            `;

            todoListHtml += html;
        }
    document.querySelector('.js-display-list').innerHTML = todoListHtml;

}

function addTodo() {

    inputTodoElement = document.querySelector('.js-input-todo');
    const name = inputTodoElement.value;
    const dateElement = document.querySelector('.js-due-date');
    const dueDate = dateElement.value;

    todoList.push({
        name, 
        dueDate
    });

    inputTodoElement.value = '';

    renderTodoList();
}
