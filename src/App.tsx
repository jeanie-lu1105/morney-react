import { Route, Routes, Navigate } from "react-router-dom";
import Tags from "@components/Tags";
import Money from "@components/Money";
import styled from "styled-components";
import Statistics from "@components/Statistics";
import Nav from "@components/Nav";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
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
        <Nav />
      </Wrapper>
    </>
  );
}

export default App;
