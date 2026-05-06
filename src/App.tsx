import { Route, Routes, Navigate } from "react-router-dom";
import Tags from "@/views/Tags";
import Money from "@/views/Money";
import Statistics from "@/views/Statistics";
import ErrorPage from "./components/Error";
import styled from "styled-components";
import { Tag } from "@/views/Tag";
const AppWrapper = styled.div`
  color: #333;
`;
function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/money" />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:id" element={<Tag />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<ErrorPage message="Page not found" />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
