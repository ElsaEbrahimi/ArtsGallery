import { type Artwork } from "../api/getApi";
import React, { createContext, useState, useEffect } from "react";

type FavoriteContextType = {
  favorites: Artwork[];
  addToFavorite: (artwork: Artwork) => void;
  removeFromFavorite: (id: number) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | null>(null);

type Props = {
  children: React.ReactNode;
};
const FavoriteContextProvider = ({ children }: Props) => {
  const loadFavorites = () => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  };

  // State to store user's favorite artworks
  const [favorites, setFavorites] = useState<Artwork[]>(() => loadFavorites());

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add artwork to favorites (prevent duplicates)
  const addToFavorite = (artwork: Artwork) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === artwork.id);
      if (exists) return prev;
      return [...prev, artwork];
    });
  };

  // Remove artwork from favorites by id
  const removeFromFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}{" "}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
