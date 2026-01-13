import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Posts</Link> |{" "}
      <Link to="/create">Create Post</Link>
    </nav>
  );
};

export default Navbar;
