const todoList = [{
            name: 'make dishes',
            dueDate: '2024-02-24'},{
            name: 'make dinner',
            dueDate: '2024-02-24'
            }];

renderToDoList();

function renderToDoList(){

    let todoListHTML = '';

    for (let i=0; i < todoList.length; i++){
        const todoObject = todoList[i];
        //const todo = todoObject.todo;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;

        const htlm = `
                        <div>${name}</div> 
                        <div>${dueDate}</div>
                        <button onclick="todoList.splice(${i},1); renderToDoList();" class="delete-button">Delete</button>
                    `;
        todoListHTML += htlm;
    }



    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addToDo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;


    todoList.push({
        //name:name,
        //dueDate:dueDate
        name, dueDate});


    inputElement.value = '';

    renderToDoList()
}