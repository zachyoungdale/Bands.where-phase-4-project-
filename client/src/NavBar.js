import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/concerts"> My Concerts</NavLink>
    </nav>
  );
}

export default NavBar;
