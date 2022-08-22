import { Route, Routes } from "react-router-dom";
import DetailBox from "../detail/DetailBox";

export default function TV(){
    return <div>TV
        <Routes>
            <Route path="/" element={<div>TV show 목록</div>}></Route>
            <Route path="/:id" element={<DetailBox/>}></Route>
        </Routes>
    </div>;
}