import React from "react";
import { useState, useEffect } from "react";
function SpotifyGetArtists() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);
  return <div></div>;
}

export default SpotifyGetArtists;
