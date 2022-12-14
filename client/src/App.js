import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SpotifyLogin from "./SpotifyLogin";
import ConcertPage from "./ConcertPage";
import ProfilePage from "./ProfilePage";
import NavBar from "./NavBar";

function App() {
  const [spotifyArtists, setSpotifyArtists] = useState({});
  const [spotifyUser, setSpotifyUser] = useState({});
  const [logoutClick, setLogoutClick] = useState(false);
  const [usersConcerts, setUsersConcerts] = useState([]);

  const handleGetArtists = (token) => {
    axios
      .get("https://api.spotify.com/v1/me/top/artists?limit=40", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setSpotifyArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGetSpotifyUser = (token) => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setSpotifyUser(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      // const { access_token, expires_in, token_type } =
      //   getReturnedParamsFromSpotifyAuth(window.location.hash);
      // localStorage.clear();
      handleGetArtists(access_token);
      handleGetSpotifyUser(access_token);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  return (
    <div className="bg-[url('/background.jpg')] bg-auto bg-repeat b-center min-h-screen w-screen relative">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <SpotifyLogin
            spotifyArtists={spotifyArtists}
            setSpotifyArtists={setSpotifyArtists}
            setSpotifyUser={setSpotifyUser}
            handleGetArtists={handleGetArtists}
            handleGetSpotifyUser={handleGetSpotifyUser}
            handleLogout={handleLogout}
          />
        </Route>
        <Route path="/profile">
          <ProfilePage
            setUsersConcerts={setUsersConcerts}
            usersConcerts={usersConcerts}
            spotifyUser={spotifyUser}
            spotifyArtists={spotifyArtists}
          />
        </Route>
        <Route path="/concerts">
          <ConcertPage
            spotifyArtists={spotifyArtists}
            setUsersConcerts={setUsersConcerts}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
