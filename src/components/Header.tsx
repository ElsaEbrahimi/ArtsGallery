import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/myfav">My Fav</Link>
      </nav>
    </>
  );
};

export default Header;
