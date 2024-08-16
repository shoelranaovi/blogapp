import App from "./App";
import Home from "./page/Home";
import Error from "./page/Error";

import { createBrowserRouter } from "react-router-dom";
import About from "./page/About";
import Blog from "./page/Blog";
import Login from "./page/Login";
import Singup from "./page/Resgister";
import Dashbord from "./page/Dashbord";
import User from "./components/User";

import NewPost from "./components/NewPost";
import ManagePost from "./components/ManagePost";
import Pro from "./components/Pro";

import AuthenticationRote from "./components/privateRote/Authentication";
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
      {
        path: "/login",
        element: (
          <AuthenticationRote>
            <Login />
          </AuthenticationRote>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthenticationRote>
            <Singup />
          </AuthenticationRote>
        ),
      },
      {
        path: "/Dashbord",
        element: (
          <AuthenticationRote>
            <Dashbord />
          </AuthenticationRote>
        ),
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "dashbord",
            element: <Pro />,
          },
          {
            path: "create-post",
            element: <NewPost />,
          },
          {
            path: "manage-post",
            element: <ManagePost />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default route;
