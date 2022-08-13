import styled from "styled-components";
import { main_color } from "../color";

export default function TodoHeader({count}){
    const todayStr = new Date().toLocaleDateString("ko-KR",{
        dateStyle:"long",
});
    return (
    <Block>
        <h1>{todayStr}</h1>
        <p>해야할 일 : {count}개</p>
    </Block>
    )
};

const Block = styled.div`
padding : 20px;
color: ${main_color};
h1{
    margin-bottom: 0px;
    font-size: 26px;
    font-weight: 700;
}
p{
    font-size: 16px;
    padding-top: 10px;
}
`;
