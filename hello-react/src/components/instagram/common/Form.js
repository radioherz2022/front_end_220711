import { lighten } from "polished";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

export default function Form(){
    const [hide, setHide] = useState(true);
    return ( 
    <form onSubmit = {(e) => e.preventDefault()}>
        <FormBlock>
            <Input/>
            <Input rightContent=
            {<BtnDisplay onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</BtnDisplay>}
            hide={hide}/>
            <Button text = "Log In" margin={"margin-top:15px"} />
        </FormBlock>
    </form>
    );
}



const FormBlock = styled.div`
    padding : 0 40px;
`

const BtnDisplay = styled.button`
    border: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    color : rgb(38,38,38);
    &:active {
        color:${lighten(0.3, "rgb(38,38,38)")}
    }
`