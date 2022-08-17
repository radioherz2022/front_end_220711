import { atom, RecoilRoot } from "recoil";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoBlock from "./components/TodoBlock";

function App() {
  return (
    <RecoilRoot>
      <TodoHeader />
      <TodoInput />
      <TodoBlock />
    </RecoilRoot>
  );
}

export default App;
