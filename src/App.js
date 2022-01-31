import { Route, Routes } from "react-router";
import Start from "./components/pages/Start";
import Rules from './components/pages/Rules';
import Domains from "./components/pages/Domains";
import Submit from './components/pages/Submit';
import Finish from './components/pages/Finish';
import { useSelector } from "react-redux";

function App() {
  const isUploaded = useSelector(state => state.auth.hasUploaded);
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Start/>} />
        {isUploaded && <Route path="/rules" element={<Rules/>} />}
        {isUploaded && <Route path="/domains" element={<Domains/>} />}
        {isUploaded && <Route path="/submit" element={<Submit/>} />}
        {isUploaded && <Route path="/finish" element={<Finish/>} />}
      </Routes>
    </>
  );
}

export default App;
