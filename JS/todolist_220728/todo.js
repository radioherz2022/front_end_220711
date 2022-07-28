let input = document.querySelector(".inputBox input");
let inputBtn = document.querySelector(".inputBox button");
let todoForm = document.querySelector("#todoForm");
let todoList = todoForm.querySelector(".todoList");

inputBtn.addEventListener("click", function (e) {
  let text = e.target.value;
  e.target.value = "";
  todoList.innerHTML = `${todoList}`;
});

let todoItems = todoList.querySelectorAll("li");
todoItems.forEach((todo) => {
  todo.addEventListener("click", function () {
    todo.classList.toggle("done");
  });
});
