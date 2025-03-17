import { router } from "@/routes";
import "@/styles.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/i18n";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
