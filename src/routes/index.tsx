import { Home } from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "./Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route page={Home} />,
  },
]);
