import { useRef } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const initialState = JSON.parse(localStorage.getItem("wordList"));

function wordReducer(state, action){
    switch(action.type){
        case "create_word" :
            return [...state, action.word];
        case "remove_word" :
            return state.filter(word => word.id !== action.id);
        case "toggle_word" :
            return state.map(word => word.id === action.id ? 
                {...word, active:!word.active}: word);
        default:
            return state;
    }
};

const WordStateContext = createContext(null);
const WordDispatchContext = createContext(null);
const WordNextIdContext = createContext(null);

export function WordProvider({children}) {
    const [state, dispatch] = useReducer(wordReducer,initialState);
    const nextId = useRef(state[state.length -1].id + 1 );

    return (
        <WordStateContext.Provider value={state}>
            <WordDispatchContext.Provider value={dispatch}>
                <WordNextIdContext.Provider value={nextId}>
                    {children}
                </WordNextIdContext.Provider>
            </WordDispatchContext.Provider>
        </WordStateContext.Provider>
    )
};

export function useWordState(){
    return useContext(WordStateContext);
};

export function useWordDispatch(){
    return useContext(WordDispatchContext);
};

export function useWordNextId(){
    return useContext(WordNextIdContext);
};