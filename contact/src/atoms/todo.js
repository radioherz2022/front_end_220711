import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

// get 함수를 통해 atom 값을 참조해서 새로운 값을 반환
export const undoneCount = selector({
  key: "undoneState",
  get: ({ get }) => {
    const todoList = get(todoState);

    const undoneTodoList = todoList.filter((todo) => !todo.done);

    return undoneTodoList.length;
  },
});
