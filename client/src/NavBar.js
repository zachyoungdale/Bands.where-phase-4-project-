import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-6 mx-auto bg-black">
      <NavLink
        exact
        to="/"
        className="text-white font-sans font-semibold text-2xl focus:font-extrabold"
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className="text-white font-sans font-semibold text-2xl focus:font-extrabold"
      >
        My Profile
      </NavLink>
      <NavLink
        to="/concerts"
        className="text-white font-sans font-semibold text-2xl focus:font-extrabold"
      >
        Concerts
      </NavLink>
    </nav>
  );
}

export default NavBar;
