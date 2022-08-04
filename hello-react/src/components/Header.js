// css 파일 import
// import "../header.css";
// import "../header.scss";
import styled, {css} from "styled-components"
import Title from "./Title";

const HeaderBlock = styled.header`
display:flex;
padding:10px;
${(props) => 
props.active && 
css`
height:300px;
align-items: flex-start;
`}
nav{
    margin-left: 20px;
    ul{
        display: flex;
        li{
            list-style: none;
            font-size: 14px;
            a{
                text-decoration:none;
                color:inherit;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
}

`;


export default function Header(){

    const headerStyle = {
        background:"tomato",
        fontSize:"32px",

    }
return (
    // style 속성에 객체 형태로 전달
    <headerBlock style={headerStyle} className="header" active={true}>
        <Title title="React"/>
        {/* 내비게이션바 */}
        <nav>
            <ul>
                <li>
                    <a href="">HTML</a>
                </li>
                <li>
                    <a href="">CSS</a>
                </li>
                <li>
                    <a href="">Javascript</a>
                </li>
            </ul>
        </nav>
    </headerBlock>
)
}