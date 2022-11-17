import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-10 mx-auto bg-black">
        <h1 className="text-white font-sans font-extrabold text-2xl">
          Bands.where
        </h1>
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
    </div>
  );
}

export default NavBar;
