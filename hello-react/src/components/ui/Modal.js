import { useState } from "react";
import {GrClose} from "react-icons/gr"
import styled, { css, keyframes } from "styled-components"

export default function Modal({setModal}){
    const [disappear, setDisappear] = useState(false);
    return(
        <BgBlock>
            <ModalBlock disappear={disappear}>
                <h2>모달창</h2>
                <BtnClose 
                    onClick={() => {
                        setDisappear(true); 
                        setTimeout(() => {
                        setModal(false);
                        }, 300);
                    }}>
                    <GrClose/>
                </BtnClose>
            </ModalBlock>
        </BgBlock>
    )

}

const fadeOut = keyframes`
to{
    opacity: 0;
}
`

const BgBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:100vw;
    height:100vh;

    position: absolute;
    top:0;
    left:0;

    background: rgba(0,0,0,0.2);

`


const ModalBlock = styled.div`
position: relative;
width:500px;
height:300px;
background: #fff;
h2{
    padding: 10px;
}
        ${({disappear}) => disappear && css`
        animation-name: ${fadeOut};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        `}

`

const BtnClose = styled.div`
position: absolute;
top:10px;
right:10px;
cursor: pointer;
`