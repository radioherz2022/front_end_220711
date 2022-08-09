
import styled from "styled-components";
import {Reset} from "styled-reset";
import Accordian from "./components/ui/Accordian";

function App(){
  return (
    <Temlate>
    <Reset/>
      <Block>
        <Accordian/>
        <Accordian/> 
        <Accordian/>  
      </Block>
    </Temlate>
  );
}

const Temlate = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`

const Block = styled.div`
width:300px;
height: 500px;
border: 1px solid #ddd;
border-radius: 8px;
padding:10px;
`

export default App;
