import styled from "styled-components";
import { bg_color, border_color } from "./Colors";
import Form from "./common/Form";

export default function Instagram(){
    return ( 
    <Template>
        <Block>
            <Logo>
                <img src={require("./insta_logo.png")} alt=""/>
            </Logo>
            <Form/>
        </Block>
    </Template>
    );
}

const Template = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${bg_color};
`

const Block = styled.div`
    width: 350px;
    height: 500px;
    border:1px solid ${border_color};
    background-color: #fff;
`

const Logo = styled.h1`
    text-align: center;
    margin: 50px 40px;
`

