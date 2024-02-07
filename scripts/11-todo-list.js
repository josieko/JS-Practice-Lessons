const todoList = [
  {
    name: "wash hair",
    dueDate: "2023-01-03",
  },
  {
    name: "wash clothes",
    dueDate: "2023-01-04",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // the line of code below is a shortcut for the top two lines of code
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class = "delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo(todo) {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate});
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}
