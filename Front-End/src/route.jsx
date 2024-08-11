import App from "./App";
import Home from "./page/Home";
import Error from "./page/Error";

import { createBrowserRouter } from "react-router-dom";
import About from "./page/About";
import Blog from "./page/Blog";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default route;
