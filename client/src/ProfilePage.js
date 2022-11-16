function ProfilePage({ spotifyUser, spotifyArtists }) {

  function profileImage(){
    if (spotifyUser?.images?.length > 0){
      return (
        <img src={spotifyUser?.images[0].url} alt=''></img>
      )
    }
  }
  return (
    <div>
      {profileImage()}
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
