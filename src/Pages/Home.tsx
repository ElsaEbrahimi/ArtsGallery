import ArtCard from "../components/ArtCard";
import { useArtwork } from "../context/useArtwork";

const Home = () => {
  const { artworks, error } = useArtwork();

  if (error) {
    return (
      <div>No ArtWorks were found because the API is not currently working</div>
    );
  }

  if (artworks.length === 0) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <>
      <div className="my-10 grid grid-cols-1 content-center gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtCard artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
