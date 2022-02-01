import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes/routes";

function App() {
  const hasCompleted = useSelector(state => state.auth.hasCompleted);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(hasCompleted, isLoggedIn);
  
  const routing = useRoutes(routes(isLoggedIn, hasCompleted));
  return (
    <>
      {routing}
    </>
  );
}

export default App;
