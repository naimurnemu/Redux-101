import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login/Login";
import App from "../App";
import NotFound from "../page/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
