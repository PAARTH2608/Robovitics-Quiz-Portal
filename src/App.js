import { Route, Routes } from "react-router";
import { useRoutes } from "react-router-dom";
import Start from "./components/pages/Start";
import Rules from './components/pages/Rules';
import Domains from "./components/pages/Domains";
import Submit from './components/pages/Submit';
import Finish from './components/pages/Finish';
import Error from "./components/pages/Error";
import { useSelector } from "react-redux";
import routes from "./routes/routes";

function App() {
  const hasCompleted = useSelector(state => state.auth.hasCompleted);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(hasCompleted, isLoggedIn);
  
  const routing = useRoutes(routes(isLoggedIn, hasCompleted));
  return (
    <>
    {/* <Routes>
        <Route exact path="/" element={<Start/>} />
        {<Route path="/rules" element={<Rules/>} />}
        {<Route path="/domains" element={<Domains/>} />}
        {<Route path="/submit" element={<Submit/>} />}
        {<Route path="/finish" element={<Finish/>} />}
        <Route exact path="/error" element={<Error/>} />
      </Routes> */}
      {routing}
    </>
  );
}

export default App;
