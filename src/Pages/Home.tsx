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
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="default.jpg" className="w-4xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Our Art Galley</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 content-center gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtCard artwork={artwork} key={artwork.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
