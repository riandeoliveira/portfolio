import "@/i18n";
import "@/main.css";
import { router } from "@/routes";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,
);
