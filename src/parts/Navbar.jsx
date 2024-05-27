import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>WhoFu</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
        <li>
          <Link to="Profile">Profile</Link>
        </li>
        <li>
          <Link to="Favorites">Favorites</Link>
        </li>
        <li>
          <Link to="Cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
