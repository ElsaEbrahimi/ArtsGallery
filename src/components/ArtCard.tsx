import { type Artwork } from "../api/getApi";
import { getArtworkImageUrl } from "../api/getImage";
import { useNavigate } from "react-router";
type Props = {
  artwork: Artwork;
};

const ArtCard = ({ artwork }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          {artwork.image_id && (
            <img
              className="w-200 h-80 object-cover rounded"
              src={getArtworkImageUrl(artwork.image_id)}
              alt={artwork.title}
            />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artwork.title}</h2>
          <p>{artwork.artist_title}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/${artwork.id}`)}
              className="btn btn-primary"
            >
              See Details
            </button>
            <button className="btn btn-ghost material-icons">favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtCard;
