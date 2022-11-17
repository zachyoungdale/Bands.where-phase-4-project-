import Moment from "react-moment";
import { useState } from "react";
function ConcertCard({
  setUsersConcerts,
  id,
  venue,
  datetime,
  url,
  artist,
  artistImage,
  concert,
}) {
  const [buttonClick, setButtonClick] = useState(false);

  function handleGoing(concertObj) {
    setButtonClick((prev) => !prev);
    setUsersConcerts((prev) => [...prev, concertObj]);
  }

  function dateAndLinks() {
    if (Array.isArray(datetime)) {
      return (
        <div className="flex flex-col justify-evenly">
          <h4 className="font-sans font-bold text-xl mb-2">Showings:</h4>
          {datetime.map((datetime, i) => {
            return (
              <div>
                <div className="font-sans font-bold">
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
        <div className="font-sans font-bold">
          <Moment date={datetime} format="LLLL" />
          <br></br>
          <a href={url} className=" font-sans font-bold text-blue-500">
            Buy Tickets
          </a>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-row p-3 bg-white m-5 rounded-lg justify-between items-center bg-opacity-90">
      <img alt={artist} src={artistImage} className="rounded-xl"></img>
      <p className="font-sans font-extrabold text-2xl max-w-md">
        {artist} at {venue}
      </p>
      {dateAndLinks()}
      <button
        onClick={(e) => handleGoing(concert)}
        className="bg-blue-500 p-3 mr-10 rounded-xl text-white font-sans font-bold text-xl hover:bg-blue-600"
      >
        {buttonClick ? "Im Going To This Concert!" : "Attending?"}
      </button>
    </div>
  );
}

export default ConcertCard;
