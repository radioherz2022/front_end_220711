import {useReducer} from "react"

const initialState = {
    amount:0,
    price:1000,
    history:[],
}

function reducer(state, action){
    switch(action.type){
    case "change_price":
        return {...state, price:parseInt(action.price)};
    case "change_amount":
        return {...state, 
            amount:action.chargePrice, 
            history:
            [...state.history,
                {type:action.chargePrice > 0 ? "charge":"use", 
                price:state.price, 
                amount:action.chargePrice,
            }], 
        };

    default:return state;
    }
}

export function useTrafficCard(){
const[state, dispatch]=useReducer(reducer, initialState);

function changeAmount (operator){
    let {amount, price} = state;
    let chargePrice = amount + price*operator;
if(changePrice> 0){
    dispatch({type:"change_amount", chargePrice})
}else{
    alert("잔액이 부족합니다.")
}
}

function changePrice(e){

    dispatch({type:"change_price", price:e.target.value})
}
return [state, changePrice, changeAmount]
}