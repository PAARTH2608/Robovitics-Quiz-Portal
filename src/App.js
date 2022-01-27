import './App.css';
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route path="/rules" element={<Authentication/>} />
        <Route path="/domains" element={<RegisterOne/>} />
        <Route path="/submit" element={<RegisterTwo/>} />
        <Route path="/finish" element={<FAQ/>} />
      </Routes>
    </>
  );
}

export default App;
