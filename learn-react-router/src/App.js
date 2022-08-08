import About from './components/About';
import Home from './components/Home';
import { useLocation } from "react-router"
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  background : ${({active}) => (active ? "tomato" : "none") };
`;

function App() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];
  return (
    <div>
      <StyleLink to="/" active={ pathname === "/"}>
      Home
      </StyleLink>
      <StyleLink to="/about" active = {pathname === "/about"}>
        About</StyleLink>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/about/*" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
