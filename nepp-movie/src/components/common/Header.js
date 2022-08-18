import styled from "styled-components";
import Navigation from "./Navigation";

export default function Header(){
    return (
    <HeaderBlock>
        <Logo>Movie</Logo>
        <Navigation/>
    </HeaderBlock>
    )
}

const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    padding: 0 100px;
    height: 80px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
    
`

const Logo = styled.h1`
    font-size: 1.6em;
    font-weight: 700;
`

