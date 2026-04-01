import { Link, Navigate, Route, Routes } from "react-router-dom";
import Tags from "./components/Tags";
import Statistics from "./components/Statistics";
import Money from "./components/Money";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid green;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      margin: 15px 0;
      text-align: center;
    }
  }
`;

function App() {
  return (
    <>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/money" />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/money" element={<Money />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </Main>
        <div>
          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页面</Link>
              </li>
              <li>
                <Link to="/money">记账页面</Link>
              </li>
              <li>
                <Link to="/statistics">统计页面</Link>
              </li>
            </ul>
          </Nav>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
