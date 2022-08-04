

import {useReducer} from "react";
import { useWordRelay } from "../hooks/useWordRelay";


function WordRelay(){
const[state, onChange, changeKeyword] = useWordRelay();
const keyword = state.keywordList[state.keywordList.length-1]
    return(
        <form onSubmit = {(e)=> {
            e.preventDefault(); changeKeyword()}}>
            <h3>{keyword}</h3>
            <input type="text" onChange={onChange}/>
            <button>입력</button>
        </form>
    )
}

export default WordRelay;
