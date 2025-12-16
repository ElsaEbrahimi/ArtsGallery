import { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";
// Custom hook to safely use FavoriteContext
export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within FavoriteContextProvider");
  }
  return context;
}
