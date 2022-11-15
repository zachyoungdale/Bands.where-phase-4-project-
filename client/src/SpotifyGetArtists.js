import React from "react";
import { useState, useEffect } from "react";
function SpotifyGetArtists({ spotifyArtists }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);
  return (
    <div>
      {spotifyArtists?.items
        ? spotifyArtists.items.map((item) => <p>{item.name}</p>)
        : null}
    </div>
  );
}

export default SpotifyGetArtists;
