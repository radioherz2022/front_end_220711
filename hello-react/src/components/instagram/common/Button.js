import styled, { css } from "styled-components";
import { btn_color, white_color } from "../Colors";

export default function Button({text, margin, active}){
    return <StyledButton margin = {margin} active={active} onClick = {() => alert("클릭!")}>{text}</StyledButton>;
}

const StyledButton = styled.div`
    width:100%;
    padding: 7px 0;
    color: ${white_color};
    text-align: center;
    font-weight: 500;
    border-radius: 6px;
    background-color: ${btn_color};
    opacity: 0.4;

    ${({margin}) => margin};
    ${({active}) => active && css`
            opacity: 1;
            cursor: pointer;
    `}

`