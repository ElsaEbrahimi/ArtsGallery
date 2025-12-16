import { useArtwork } from "../context/useArtwork";
import { useParams } from "react-router";
import { type Artwork } from "../api/getApi";
import { getArtworkImageUrl } from "../api/getImage";
import { useNavigate } from "react-router";

const SingleArt = () => {
  const { artworks } = useArtwork();
  const { id } = useParams();
  const navigate = useNavigate();

  // convert id from string to number
  const artworkid = artworks.findIndex((art) => art.id === Number(id));
  const artwork: Artwork | undefined = artworks[artworkid];
  // handle case when artwork is not found
  if (!artwork) {
    return <div className="p-10">Artwork not found</div>;
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen justify-start">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={getArtworkImageUrl(artwork.image_id!)}
            alt={artwork.title}
          />

          <div>
            <h1 className="text-5xl font-bold">{artwork.title}</h1>
            <p className="py-6">{artwork.artist_title ?? "Unknown Artist"}</p>
            <button onClick={() => navigate(-1)} className="btn btn-primary">
              Back
            </button>
            <button className="btn btn-ghost material-icons">favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArt;
