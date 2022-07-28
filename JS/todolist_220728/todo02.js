let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = todoForm.querySelector(".todoList");

todoForm.addEventListener("submit", function (e) {
  // 이벤트이 기본 동작을 막는다.
  if (input.value === "") return;
  e.preventDefault();
  // .todoList 글씨 추가해보기!
  if (input.value === "") return;
  todoArr = [...todoArr, { text: input.value, done: false }];
  console.log(todoArr);
  render();
});

let todoItems = todoList.querySelectorAll("li");
//todoItems.forEach((todo) => {
//  todo.addEventListener("click", function () {
//    todo.classList.toggle("done");
//  });
//});

// 이벤트 위임
todoList.addEventListener("click", function () {
  console.log(e.target);
  if (e.target.matches(".todoList li")) e.target.classList.toggle("done");
  else if (e.target.matches(".btnDel .xi-trash")) {
    let parentLi = e.target.parentNode.parentNode;
    todoList.removeChild(parentLi);
  }
});

localStorage.setItem("todo", "테스트");
