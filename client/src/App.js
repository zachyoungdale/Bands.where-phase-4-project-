import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import SpotifyLogin from "./SpotifyLogin";
import ConcertPage from "./ConcertPage";
import ProfilePage from "./ProfilePage";
import NavBar from "./NavBar";

function App() {
  const [spotifyArtists, setSpotifyArtists] = useState({});
  const [spotifyUser, setSpotifyUser] = useState({});

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <SpotifyLogin
        spotifyArtists={spotifyArtists}
        setSpotifyArtists={setSpotifyArtists}
        setSpotifyUser={setSpotifyUser}
        />
        </Route>
        <Route path="/profile">
        <ProfilePage spotifyUser={spotifyUser} spotifyArtists={spotifyArtists} />
        </Route>
        <Route path="/concerts">
        <ConcertPage spotifyArtists={spotifyArtists} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
