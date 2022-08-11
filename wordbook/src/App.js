import Wordbook from "./components/Wordbook";
import {createGlobalStyle} from 'styled-components';
import { WordProvider } from "./components/contexts/WordContext";


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
      <WordProvider>
        <GlobalStyle/>
        <Wordbook/>
      </WordProvider>
    </div>
  );
}

export default App;
