import "./App.css";
import { useState } from "react";
import SpotifyLogin from "./SpotifyLogin";
import ConcertPage from "./ConcertPage";
import ProfilePage from "./ProfilePage";

function App() {
  const [spotifyArtists, setSpotifyArtists] = useState({});
  const [spotifyUser, setSpotifyUser] = useState({});

  return (
    <div className="App">
      <SpotifyLogin
        spotifyArtists={spotifyArtists}
        setSpotifyArtists={setSpotifyArtists}
        setSpotifyUser={setSpotifyUser}
      />
      <ConcertPage spotifyArtists={spotifyArtists} />
      <ProfilePage spotifyUser={spotifyUser} spotifyArtists={spotifyArtists} />
    </div>
  );
}

export default App;
