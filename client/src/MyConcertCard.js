import Moment from "react-moment";

function MyConcertCard({
  id,
  venue,
  datetime,
  url,
  artist,
  artistImage,
  concert,
  setUsersConcerts,
}) {
  function handleDelete(obj) {
    setUsersConcerts((prev) => prev.filter((item) => item != obj));
  }

  function dateAndLinks() {
    if (Array.isArray(datetime)) {
      return (
        <div className="flex flex-col justify-evenly">
          <h4 className="font-sans font-bold text-xl mb-2 text-white">
            Showings
          </h4>
          {datetime.map((datetime, i) => {
            return (
              <div>
                <div className="font-sans font-bold text-white">
                  <Moment date={datetime} format="LLLL" />
                </div>
                <a href={url[i]} className=" font-sans font-bold text-blue-500">
                  Buy Tickets
                </a>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="font-sans font-bold text-white">
          <Moment date={datetime} format="LLLL" />
          <br></br>
          <a
            href={url}
            className=" font-sans font-bold text-white hover:text-blue-200"
          >
            Buy Tickets
          </a>
        </div>
      );
    }
  }

  return (
    <div className="bg-blue-700 p-4 m-4 rounded-xl bg-opacity-90 mr-20">
      <img alt={artist} src={artistImage} className="rounded-xl"></img>
      <p className="font-sans font-extrabold text-2xl max-w-md pt-6 pb-6 text-white">
        {artist} at {venue}
      </p>
      {dateAndLinks()}
      <button
        onClick={(e) => handleDelete(concert)}
        className="bg-blue-500 p-3 mt-5 rounded-xl text-white font-sans font-bold text-xl hover:bg-blue-600"
      >
        I'm Not Going Anymore
      </button>
    </div>
  );
}

export default MyConcertCard;
