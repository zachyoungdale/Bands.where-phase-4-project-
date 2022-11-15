import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function SpotifyGetArtists() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetArtists = () => {
    axios
      .get("https://api.spotify.com/v1/me/top/artists?limit=40", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGetArtists}>Get Artists</button>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </div>
  );
}

export default SpotifyGetArtists;
