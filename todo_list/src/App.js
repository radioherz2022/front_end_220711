
import TodoBox from "./component/revise_0816_useContext/TodoBox";
import {Reset} from "styled-reset"
import {TodoProvider} from "./component/revise_0816_useContext/useTodoContext";

function App(){
    return ( 
    <>
    <Reset/>
    <TodoProvider>
    <TodoBox/>
    </TodoProvider>
    </>
    )
}

export default App;
