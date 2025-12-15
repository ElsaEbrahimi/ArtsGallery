import { useContext } from "react";
import { ArtworkContext } from "../context/MainContext";
export function useArtwork() {
  const context = useContext(ArtworkContext);

  if (!context) {
    throw new Error("useArtwork must be used within ArtworkContextProvider");
  }

  return context;
}
