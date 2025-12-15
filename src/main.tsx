import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ArtworkContextProvider from "./context/MainContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ArtworkContextProvider>
        <App />
      </ArtworkContextProvider>
    </BrowserRouter>
  </StrictMode>
);
