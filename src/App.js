import { Route, Routes } from "react-router";
import Start from "./components/pages/Start";
import Rules from './components/pages/Rules';
function App() {
  return (
    <>
    <Routes>
        {/* <Route exact path="/" element={<Start/>} />
        <Route path="/rules" element={<Authentication/>} />
        <Route path="/domains" element={<RegisterOne/>} /> */}
        <Route path="/" element={<Rules/>} />
        {/* <Route path="/finish" element={<FAQ/>} /> */}
      </Routes>
    </>
  );
}

export default App;
