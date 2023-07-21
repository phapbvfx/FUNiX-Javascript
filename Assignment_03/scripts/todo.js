"use strict";

const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

//Filter todo of current user
const currentUserTodo = function () {
  return todoArr.filter((todo) => todo.owner === currentUser.username);
};

// Add todo function
const addTodo = function () {
  if (validateTodo(inputTask.value)) {
    const newTask = new Task(inputTask.value, currentUser.username, false);
    todoArr.push(newTask);
    saveToStorage(TODO_ARRAY, todoArr);
    todoList.insertAdjacentHTML("afterbegin", renderTodo(newTask));
    inputTask.value = "";
  }
};

// handle submit add todo
btnAdd.addEventListener("click", addTodo);

// Validate todo
const validateTodo = function (todo) {
  if (todo === "") {
    alert("Please enter todo ");
    return false;
  }
  const isExit = currentUserTodo().some((currentTodo) => {
    return currentTodo.task === todo;
  });
  if (isExit) {
    alert("Todo already exist, plz try other");
    return false;
  }
  return true;
};

// render a todo to html
const renderTodo = function (todo) {
  return `<li data-todo="${todo.task}" class="${todo.isDone ? "checked" : ""}">
            ${todo.task}
            <span data-todo="${todo.task}" class="close">×</span>
        </li>`;
};

// render todolist
const renderTodoList = function () {
  if (isObjectEmpty(currentUser)) {
    alert("You must be login to use this feature");
    window.location.href = "../pages/login.html";
  }
  currentUserTodo().forEach((todo) => {
    todoList.insertAdjacentHTML("afterbegin", renderTodo(todo));
  });
};

renderTodoList();

// Handle toggle isDone todo and remove todo
todoList.addEventListener("click", (e) => {
  const { target } = e;
  const currentTodo = currentUserTodo();
  const newTodoArr = todoArr.filter(
    (todo) => todo.owner !== currentUser.username
  );

  //toggle isDone
  if (target.tagName === "LI") {
    const index = currentTodo.findIndex(
      (todo) => todo.task === target.dataset.todo
    );
    currentTodo[index].isDone = !currentTodo[index].isDone;

    todoArr = [...newTodoArr, ...currentTodo];
    todoList.innerHTML = currentTodo.map((todo) => renderTodo(todo)).join("");
    saveToStorage(TODO_ARRAY, todoArr);
  }

  // remove
  if (target.tagName === "SPAN" && target.classList.contains("close")) {
    currentTodo.splice(
      currentTodo.findIndex((todo) => todo.task === target.dataset.todo),
      1
    );

    todoArr = [...newTodoArr, ...currentTodo];
    todoList.innerHTML = currentTodo.map((todo) => renderTodo(todo)).join("");
    saveToStorage(TODO_ARRAY, todoArr);
  }
});
