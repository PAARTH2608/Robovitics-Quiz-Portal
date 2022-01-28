import { Route, Routes } from "react-router";
import Start from "./components/pages/Start";
import Rules from './components/pages/Rules';
import Domains from "./components/pages/Domains";
import Submit from './components/pages/Submit';
import Finish from './components/pages/Finish';
import Management from "./components/subdomains/Management";
import Logical from "./components/subdomains/Logical";
import Mech from "./components/subdomains/Mech";
import CSE from "./components/subdomains/CSE";
import Electrical from "./components/subdomains/Electrical";

function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route path="/rules" element={<Rules/>} />

        <Route path="/domains" element={<Domains/>} />
        {/* <Route path="/domain" element={<Management/>} />
        <Route path="/domain/logical" element={<Logical/>} />
        <Route path="/domain/mechanical" element={<Mech/>} />
        <Route path="/domain/cse" element={<CSE/>} />
        <Route path="/domain/electrical" element={<Electrical/>} /> */}

        <Route path="/submit" element={<Submit/>} />
        <Route path="/finish" element={<Finish/>} />
      </Routes>
    </>
  );
}

export default App;
