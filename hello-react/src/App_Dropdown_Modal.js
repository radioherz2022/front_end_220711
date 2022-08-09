
import { useState } from "react";
import styled from "styled-components";
import {Reset} from "styled-reset";
import Dropdown from "./components/ui/Dropdown";
import Modal from "./components/ui/Modal";

function App(){
  const [modal, setModal] = useState(true);
  return (
    <Temlate>
    <Reset/>
      <Block>
        <Dropdown/>
      </Block>
      {modal && <Modal setModal = {setModal} />}
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
width: 300px;
height: 500px;
border: 1px solid #ddd;
border-radius: 8px;
padding:10px;
`

export default App;
