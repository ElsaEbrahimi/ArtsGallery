import { z } from "zod";
const API_URL =
  "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,image_id";

const ArtWorkSchema = z.object({
  id: z.number(),
  title: z.string(),
  artist_title: z.string().nullable(),
  image_id: z.string().nullable(),
});
const ArtworkArraySchema = z.array(ArtWorkSchema);

export type Artwork = z.infer<typeof ArtWorkSchema>;
export async function getArtworkFromApi(): Promise<Artwork[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("fetch failed");
  const json = await res.json();
  const { data, success } = ArtworkArraySchema.safeParse(json.data);
  if (!success) {
    throw new Error("Invalid artwork data");
  }
  console.log(data);
  return data;
}
