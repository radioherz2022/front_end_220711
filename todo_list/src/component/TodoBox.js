import styled from "styled-components";
import { bg_color, white_color } from "../color";

export default function TodoBox({children}){
    return <div>
    <Container>
        <Block>
            {children}
        </Block>
    </Container>
    </div>;
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
background-color: ${bg_color};
`

const Block = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height : 500px;
border: 1px solid #bbb;
border-radius: 5px;
background-color: ${white_color};

`