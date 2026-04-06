import { Route, Routes, Navigate } from "react-router-dom";
import Tags from "@/views/Tags";
import Money from "@/views/Money";
import Statistics from "@/views/Statistics";
import ErrorPage from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/money" />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<ErrorPage message="Page not found" />} />
      </Routes>
    </>
  );
}

export default App;
