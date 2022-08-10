import Wordbook from "./components/Wordbook";
import {createGlobalStyle} from 'styled-components';
import GrandFather from "./components/tutorial-context/GrandFather";
import Last from "./components/tutorial-context/Last";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <GrandFather/>
      <Last />
    </div>
  );
}

export default App;
