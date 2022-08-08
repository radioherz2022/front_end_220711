import { Route } from "react-router";

export default function Detail(){
    return ( 
    <div>상세 페이지
        <Route path=":id" element={<div>dfsdfsdf</div>}/>

    </div>
    )
}