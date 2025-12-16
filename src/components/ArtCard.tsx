import { type Artwork } from "../api/getApi";
import { getArtworkImageUrl } from "../api/getImage";
import { useNavigate } from "react-router";
import { useFavorite } from "../context/useFavorite";

type Props = {
  artwork: Artwork;
};

const ArtCard = ({ artwork }: Props) => {
  const { addToFavorite, removeFromFavorite, favorites } = useFavorite();
  const navigate = useNavigate();

  // Check if artwork is already in favorites
  const isFavorite = favorites.some((fav) => fav.id === artwork.id);

  const handelClick = () => {
    if (isFavorite) {
      removeFromFavorite(artwork.id);
    } else {
      addToFavorite(artwork);
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            className="w-200 h-80 object-cover rounded"
            src={getArtworkImageUrl(artwork.image_id!)}
            alt={artwork.title ?? "No Title"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artwork.title}</h2>
          <p>{artwork.artist_title}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/${artwork.id}`)}
              className="btn btn-soft"
            >
              See Details
            </button>
            <button
              onClick={handelClick}
              className={`btn btn-soft material-icons ${
                isFavorite ? "text-red-800" : "text-white"
              }`}
            >
              favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtCard;
