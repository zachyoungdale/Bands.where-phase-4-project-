function ProfilePage({ spotifyUser, spotifyArtists }) {
  console.log(spotifyUser);

  return (
    <div>
      <img src={spotifyUser?.images ? spotifyUser?.images[0].url : null}></img>
      <h1>{spotifyUser?.display_name}</h1>
      <a href={spotifyUser?.external_urls?.spotify}>Spotify Account</a>
      <h3>Top Artists:</h3>
      {spotifyArtists?.items
        ? spotifyArtists.items.map((artist) => <h4>{artist.name}</h4>)
        : null}
    </div>
  );
}

export default ProfilePage;
