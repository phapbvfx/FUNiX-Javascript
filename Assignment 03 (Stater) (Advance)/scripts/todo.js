"use strict";

const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

const currentUserTodo = function () {
  return todoArr.filter((todo) => todo.owner === currentUser.username);
};

btnAdd.addEventListener("click", () => {
  if (validateTodo(inputTask.value)) {
    const newTask = new Task(inputTask.value, currentUser.username, false);
    todoArr.push(newTask);
    saveToStorage(TODO_ARRAY, todoArr);
    todoList.insertAdjacentHTML("afterbegin", renderTodo(newTask));
    inputTask.value = "";
  }
});

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

const renderTodo = function (todo) {
  return `<li class="${todo.isDone ? "checked" : ""}">
            ${todo.task}
            <span data-todo="${todo.task}" class="close">×</span>
        </li>`;
};

const renderTodoList = function () {
  currentUserTodo().forEach((todo) => {
    todoList.insertAdjacentHTML("afterbegin", renderTodo(todo));
  });
};

renderTodoList();

todoList.addEventListener("click", (e) => {
  const { target } = e;

  //toggle isDone
  if (target.tagName === "LI") {
    target.classList.contains("checked")
      ? target.classList.remove("checked")
      : target.classList.add("checked");
  }

  if (target.tagName === "SPAN" && target.classList.contains("close")) {
    const newTodoArr = todoArr.filter(
      (todo) => todo.owner !== currentUser.username
    );
    const currentTodo = currentUserTodo();

    currentTodo.splice(
      currentTodo.findIndex((todo) => todo.task === target.dataset.todo),
      1
    );
    todoArr = [...newTodoArr, ...currentTodo];
    todoList.innerHTML = todoArr.map((todo) => renderTodo(todo)).join("");
    saveToStorage(TODO_ARRAY, todoArr);
  }
});
