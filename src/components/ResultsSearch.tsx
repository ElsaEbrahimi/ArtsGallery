import { getArtworkImageUrl } from "../api/getImage";
import { type Artwork } from "../api/getApi";
type Props = {
  artwork: Artwork;
};
const ResultsSearch = ({ artwork }: Props) => {
  return (
    <li className="list-row py-10">
      <div>
        {artwork.image_id && (
          <img
            alt={artwork.title}
            className="w-20 h-20 object-cover rounded"
            src={getArtworkImageUrl(artwork.image_id)}
          />
        )}
      </div>
      <div>
        <div>{artwork.title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {artwork.artist_title}
        </div>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">See Details</button>
      </div>
    </li>
  );
};
export default ResultsSearch;
