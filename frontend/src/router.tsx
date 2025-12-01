import { createBrowserRouter } from "react-router";
import Login from "./Login";
import Register from "./Register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
