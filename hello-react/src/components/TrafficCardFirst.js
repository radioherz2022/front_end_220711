import {startTransition, useReducer} from "react"

const initialState = {
    amount:0,
    price:1000,
    history:[],
}

function reducer(state, action){
    switch(action.type){
    case "change_price":
        return {...state, price:parseInt(action.price)};
    case "charge":
        let chargePrice = state.amount + state.price;
        return {...state, 
            amount:chargePrice, 
            history:
            [...state.history,
                {type:"charge", 
                price:state.price, 
                amount:chargePrice,
            }], 
        };

    case "use":
        let difference = state.amount - state.price;
        if(difference < 0){
            alert("잔액이 부족합니다");
            return state; 
        }
        else{
           return {
            ...state,
            amount:difference,
            history:[
                ...state.history,{
                    type:"use",
                    price:state.price,
                    amount:difference,
                }
            ]
        }
    }
    default:return state;
    }
}



export default function TrafficCard(){
    const[state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h3>잔액 :{state.amount}</h3>
            <p>금액:{""}
            <input 
            type="number" 
            step={1000} 
            min={1000}
            max={20000}
            defaultValue={1000} 
            onChange= {(e)=>
            dispatch({type:"change_price", price:e.target.value})
            }
            />
            </p>
            <button onClick={()=> dispatch({type:"charge"})}>충전</button>
            <button onClick={()=> dispatch({type:"use"})}>사용</button>
            <ul>
               {state.history.map((item) => 
               <li style={{color:item.type === "charge"?"blue":"red"}}>
                {item.price}원 {item.type === "charge" ? "충전":"사용"} 충전. 잔액 : {item.amount}원
                </li>
                )}

            </ul>
            
        </div>
    )
}

