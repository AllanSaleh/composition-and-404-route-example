import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">First</Link>
      </li>
      <li>
        <Link to="/second">Second</Link>
      </li>
      <li>
        <Link to="/third">Third</Link>
      </li>
      <li>
        <Link to="/forth">Forth</Link>
      </li>
    </ul>
  );
};

export default Navbar;
