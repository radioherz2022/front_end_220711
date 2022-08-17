import { useSelector, useDispatch } from "react-redux"
import { decrease, increase } from "../reducers/counter";

export default function Counter(){
    // useSelector를 통해 Provider의 store값을 읽을 수 있다.
    // => store.getState() 결과
    const num = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    // useDispatch를 통해 store.dispatch를 가져올 수 있다.
    const add = () => {
        dispatch(increase());
    }
    const sub = () => {
        dispatch(decrease());
    }

    return (
    <div>
        <h3>{num}</h3>
        <button onClick={add}>+1</button>
        <button onClick={sub}>-1</button>
    </div>
    )
}