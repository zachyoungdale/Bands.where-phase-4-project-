import MyConcertCard from "./MyConcertCard";

function ProfilePage({ spotifyUser, spotifyArtists, usersConcerts }) {

const myConcerts = usersConcerts.map((concert) => {
  return <MyConcertCard 
  id={concert.id}
  key={concert.id}
  venue={concert.venue}
  datetime={concert.datetime}
  url={concert.url}
  artist={concert.artist.name}
  artistImage={concert.artist.image}
  />
})

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
    <h3>My Concerts: </h3>
      {myConcerts}
    </div>
  );
}

export default ProfilePage;
