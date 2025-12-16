import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ArtworkContextProvider from "./context/MainContext.tsx";
import FavoriteContextProvider from "./context/FavoriteContext.tsx";
import { NoteContextProvider } from "./context/NoteContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ArtworkContextProvider>
        <FavoriteContextProvider>
          <NoteContextProvider>
            <App />
          </NoteContextProvider>
        </FavoriteContextProvider>
      </ArtworkContextProvider>
    </BrowserRouter>
  </StrictMode>
);
