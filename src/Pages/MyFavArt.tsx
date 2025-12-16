import { useFavorite } from "../context/useFavorite";
import ArtCard from "../components/ArtCard";

const MyFavArt = () => {
  const { favorites } = useFavorite();

  if (favorites.length === 0) {
    return <p className="text-center mt-10">No favorite artworks yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {favorites.map((artwork) => (
        <ArtCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default MyFavArt;
