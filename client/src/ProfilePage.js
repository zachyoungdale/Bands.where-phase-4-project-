import MyConcertCard from "./MyConcertCard";

function ProfilePage({
  spotifyUser,
  spotifyArtists,
  usersConcerts,
  setUsersConcerts,
}) {
  const myConcerts = usersConcerts.map((concert) => {
    return (
      <MyConcertCard
        setUsersConcerts={setUsersConcerts}
        id={concert.id}
        key={concert.id}
        venue={concert.venue}
        datetime={concert.datetime}
        url={concert.url}
        artist={concert.artist.name}
        artistImage={concert.artist.image}
        concert={concert}
      />
    );
  });

  function profileImage() {
    if (spotifyUser?.images?.length > 0) {
      return (
        <div className="flex justify-center m-10 p-6">
          <img
            src={spotifyUser?.images[0].url}
            alt=""
            className="rounded-xl"
          ></img>
        </div>
      );
    }
  }
  return (
    <div className="bg-black m-20 rounded-2xl bg-opacity-80">
      {profileImage()}
      <h1 className="flex justify-center font-sans font-bold text-4xl text-white">
        {spotifyUser?.display_name}
      </h1>
      <a
        href={spotifyUser?.external_urls?.spotify}
        className="flex justify-center p-3 font-sans font-bold text-2xl text-blue-500 hover:text-blue-600"
      >
        Spotify Account
      </a>
      <div className="mt-10">
        <div className="grid grid-cols-2 gap-3 space-evenly">
          <div>
            <h3 className="flex justify-center font-sans font-bold text-3xl p-4 text-white">
              Top Artists:
            </h3>

            {spotifyArtists?.items
              ? spotifyArtists.items.map((artist) => (
                  <h4 className="flex justify-center font-sans font-bold text-2xl p-1 text-white">
                    {artist.name}
                  </h4>
                ))
              : null}
          </div>
          <div>
            <h1 className="font sans font-bold text-white text-3xl">
              My Concerts:
            </h1>
            <div>{myConcerts}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
