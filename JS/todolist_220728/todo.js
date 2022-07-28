let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoList");

todoForm.addEventListener("submit", function (e) {

  e.preventDefault();
  if (input.value === "") return;
  let todoText = input.value;
  let todoItem = document.createElement("li");

  todoItem.innerHTML = `
        ${todoText} 
        <div class="btnDel">
            <i class="xi-trash"></i>
        </div>
    `;
  todoList.appendChild(todoItem);
  input.value = "";
});

let todoItems = todoList.querySelectorAll("li");

todoItems.forEach((todo) => {
  todo.addEventListener("click", function () {
    todo.style.textDecoration="line-through";
    todo.style.color = "#b3b3b3";
  });
});