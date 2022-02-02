import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes/routes";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const random = useSelector(state => state.upload.random);
  
  const routing = useRoutes(routes(isLoggedIn, random));
  return (
    <>
      {routing}
    </>
  );
}

export default App;
