import { searchArtwork } from "../api/searchApi";
import { type Artwork } from "./getApi";
export const changeHandler =
  (setQuery: (q: string) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

export const clickHandler =
  (query: string, setResults: (res: Artwork[]) => void) => async () => {
    const results = await searchArtwork(query);
    setResults(results);
  };
