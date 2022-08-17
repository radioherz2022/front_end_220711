// 액션 타입(상수)
const increment = "increment";
const decrement = "decrement";

// 액션을 생성하는 함수
export const increase = () => ({type: increment});
export const decrease = () => ({type: decrement});

// 리듀서
export default function counter(state = 0, action){
    switch(action.type){
        case increment:
            return state +1;
            case decrement:
                return state -1;
                default:
                    return state;
    }
}