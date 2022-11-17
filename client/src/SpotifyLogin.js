import React from "react";
import axios from "axios";
import { useEffect } from "react";
import SpotifyGetArtists from "./SpotifyGetArtists";

const CLIENT_ID = "323bac68e4f345389239eb04ffffb29e";
const REDIRECT_URI = "http://localhost:4000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPES = ["user-top-read"];
const SCOPES_URL_PARAM = SCOPES.join("%20");

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});
  return paramsSplitUp;
};

function SpotifyLogin({
  spotifyArtists,
  setSpotifyArtists,
  setSpotifyUser,
  handleGetArtists,
  handleGetSpotifyUser,
  handleLogout,
}) {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("tokenType", token_type);
      handleGetArtists(access_token);
      handleGetSpotifyUser(access_token);
    }
  }, []);
  function handleLogin() {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  return (
    <div>
      <button onClick={handleLogin} className="bg-green-400">
        LOGIN TO SPOTIFY
      </button>
      <button onClick={handleLogout}>Logout</button>
      <SpotifyGetArtists spotifyArtists={spotifyArtists} />
    </div>
  );
}

export default SpotifyLogin;
