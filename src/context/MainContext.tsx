import React, { createContext, useEffect, useState } from "react";
import { getArtworkFromApi } from "../api/getApi";
import { type Artwork } from "../api/getApi";

type ArtworkContextType = {
  artworks: Artwork[];
  setArtwork: React.Dispatch<React.SetStateAction<Artwork[]>>;
  error: Error | null;
};
export const ArtworkContext = createContext<ArtworkContextType | null>(null);
type Props = {
  children: React.ReactNode;
};
const ArtworkContextProvider = ({ children }: Props) => {
  const [artworks, setArtwork] = useState<Artwork[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const artworkData = await getArtworkFromApi();
        setArtwork(artworkData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    loadArtworks();
  }, []);

  return (
    <ArtworkContext.Provider value={{ artworks, setArtwork, error }}>
      {children}
    </ArtworkContext.Provider>
  );
};
export default ArtworkContextProvider;
