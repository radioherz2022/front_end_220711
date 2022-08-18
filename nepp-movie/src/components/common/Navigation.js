import { Link } from "react-router-dom";
import styled from "styled-components";

const gnbList = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"Movie",
        url:"/movie",
    },
    {
        id:3,
        title:"TV",
        url:"/tv",
    },
]

export default function Navigation(){
    return (
    <NavBlock>
        <ul>
            {gnbList.map((menu) => (
                <NavItem menu={menu}/>
            ))}
        </ul>
    </NavBlock>
    )
}

const NavBlock = styled.nav`
    ul{
        display: flex;
        margin-left: 100px;
        li+li{
            margin-left:20px;
            
        }

    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:inherit;
`
// 기존스타일에 추가적으로 스타일 반영하는 방법
// const "Styled + 각 해당명Link또는 NavBlock" = styled(각 해당명)
// const StyledNavBlock = styled(NavBlock)`` 만약 NavBlock에 스타일 추가 하고 싶다면 이런식으로

function NavItem ({menu}) {
    return <li>
        <StyledLink key={menu.id} to={menu.url}>
            {menu.title}
        </StyledLink>
    </li>
}