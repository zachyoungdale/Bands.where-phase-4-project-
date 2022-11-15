import "./App.css";
import { useState } from "react";
import SpotifyLogin from "./SpotifyLogin";
import ConcertPage from "./ConcertPage";

function App() {
  const [spotifyArtists, setSpotifyArtists] = useState({});
  return (
    <div className="App">
      <SpotifyLogin
        spotifyArtists={spotifyArtists}
        setSpotifyArtists={setSpotifyArtists}
      />
      <ConcertPage />
    </div>
  );
}

export default App;
