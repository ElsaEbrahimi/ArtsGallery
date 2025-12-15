import { type Artwork } from "./getApi";
import { ArtworkArraySchema } from "./getApi";

export async function searchArtwork(query: string): Promise<Artwork[]> {
  const SEARCH_URL = `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,artist_title,image_id`;

  const res = await fetch(SEARCH_URL);
  if (!res.ok) throw new Error("fetch failed");
  const json = await res.json();
  const { data, success } = ArtworkArraySchema.safeParse(json.data);
  if (!success) {
    throw new Error("invalid Artwork Data");
  }
  return data;
}
