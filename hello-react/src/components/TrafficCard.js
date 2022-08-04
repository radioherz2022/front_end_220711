import {startTransition, useReducer} from "react"
import { useTrafficCard } from "../hooks/useTrafficCard";



export default function TrafficCard(){
    const[state, changePrice, changeAmount] = useTrafficCard();
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
            onChange= {changePrice}
            />
            </p>
            <button onClick={()=> changeAmount(1)}>충전</button>
            <button onClick={()=> changeAmount(-1)}>사용</button>
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

