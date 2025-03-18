import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "./Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route page={Home} />,
  },
  {
    path: "*",
    element: <Route page={NotFound} />,
  },
]);
