import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar inset-x-0 top-0 z-50 bg-base-100 shadow-sm fixed ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link to="/myfav" className="btn btn-ghost text-xl">
            My Fav
          </Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
