import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes/routes";

function App() {
  const complete = useSelector((state) => state.completed.complete);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(hasCompleted, isLoggedIn);
  
  const routing = useRoutes(routes(isLoggedIn, complete));
  return (
    <>
      {routing}
    </>
  );
}

export default App;
