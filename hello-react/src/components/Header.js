
// import "../header.css";
// import "../header.scss";
import styled from "styled-components"
import Title from "./Title";

const HeaderBlock = styled.header`
display: flex;
padding :10px;
align-items: center;


nav {
    margin-left: 50px;
    ul {
      display: flex;
      li {
        list-style: none;
        font-size: 20px;
        & + li {
          margin-left: 10px;
        }
        a {
          text-decoration: none;
          color: inherit;
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
        background : "tomato",
        fontSize : "32px",
    }
    const arr = [1];

return (
<HeaderBlock 
style={headerStyle} 
className="header"
active={arr.length > 0}
color="red"
>
    <Title title="React"/>
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
          <li>
            <a href="">React</a>
          </li>
        </ul>
      </nav>
</HeaderBlock>

)
}