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
      {artworks.map((art) => (
        <p key={art.id}>{art.title}</p>
      ))}
    </>
  );
};

export default Home;
