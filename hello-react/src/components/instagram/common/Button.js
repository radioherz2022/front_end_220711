import styled from "styled-components";
import { btn_color, white_color } from "../Colors";

export default function Button({text, margin}){
    return <StyledButton margin = {margin}>{text}</StyledButton>;
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
    cursor: pointer;
    ${({margin}) => margin};

`