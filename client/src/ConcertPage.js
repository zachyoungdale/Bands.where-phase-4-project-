import { useState } from "react";
import ConcertCard from "./ConcertCard.js";

function ConcertPage({ spotifyArtists, setUsersConcerts }) {
  const [concerts, setConcerts] = useState([]);
  const [showsAll, setShowsAll] = useState(true);

  function handleChange(event) {
    fetch(`/cities/${event.target.value}/concerts`)
      .then((response) => response.json())
      .then((data) => {
        setConcerts(data);
      });
  }

  function handleSort(event) {
    if (event.target.value === "artist") {
      setConcerts(
        [...concerts].sort((a, b) => a.artist.name.localeCompare(b.artist.name))
      );
    } else if (event.target.value === "venue") {
      setConcerts([...concerts].sort((a, b) => a.venue.localeCompare(b.venue)));
    } else {
      setConcerts(
        [...concerts].sort((a, b) => a.datetime.localeCompare(b.datetime))
      );
    }
  }

  let concertsArray = [];
  if (!showsAll) {
    if (!spotifyArtists.items) {
      alert("You are not logged in");
      concertsArray = concerts;
    } else {
      const filteredArray = spotifyArtists?.items?.map((artist) => artist.name);
      concertsArray = concerts.filter((concert) => {
        if (filteredArray.includes(concert.artist.name)) {
          return concert;
        }
      });
    }
  } else {
    concertsArray = concerts;
  }

  const newObj = {};
  for (const c of concertsArray) {
    if (!newObj[c.artist.name + c.venue]) {
      newObj[c.artist.name + c.venue] = {
        id: c.id,
        venue: c.venue,
        datetime: c.datetime,
        url: c.url,
        artist: { id: c.artist.id, name: c.artist.name, image: c.artist.image },
        city: { id: c.city.id, name: c.city.name },
      };
    } else {
      //add showings
      let preexistingDatetime = newObj[c.artist.name + c.venue].datetime;
      if (!Array.isArray(preexistingDatetime)) {
        preexistingDatetime = [preexistingDatetime, c.datetime];
      } else {
        preexistingDatetime.push(c.datetime);
      }
      newObj[c.artist.name + c.venue].datetime = preexistingDatetime;
      //add urls
      let preexistingLinks = newObj[c.artist.name + c.venue].url;
      if (!Array.isArray(preexistingLinks)) {
        preexistingLinks = [preexistingLinks, c.url];
      } else {
        preexistingLinks.push(c.url);
      }
      newObj[c.artist.name + c.venue].url = preexistingLinks;
    }
  }

  return (
    <div>
      <div className="flex items-center bg-black p-6 justify-around bg-opacity-75">
        <select
          name="cities"
          onChange={handleChange}
          className="bg-white text-black p-2 rounded-xl font-sans text-lg font-bold"
        >
          <option value="">Select your city...</option>
          <option value="1">San Antonio</option>
          <option value="2">New York</option>
          <option value="3">Los Angeles</option>
          <option value="4">Chicago</option>
          <option value="5">Philadelphia</option>
          <option value="6">San Francisco</option>
          <option value="7">Nashville</option>
          <option value="8">Miami</option>
          <option value="9">Austin</option>
          <option value="10">Boston</option>
        </select>

        <select
          name="sortBy"
          onChange={handleSort}
          className="bg-white text-black p-2 rounded-xl font-sans text-lg font-bold"
        >
          <option value="date">Sort by Date</option>
          <option value="artist">Sort by Artist</option>
          <option value="venue">Sort by Venue</option>
        </select>

        <button
          onClick={(e) => setShowsAll(true)}
          className="bg-white rounded-xl text-black p-2 text-lg hover:bg-blue-500 font-bold"
        >
          Show All Concerts
        </button>
        <button
          onClick={(e) => setShowsAll(false)}
          className="bg-white rounded-xl text-black p-2 text-lg hover:bg-blue-500 font-bold"
        >
          Show Concerts by My Artists
        </button>
      </div>

      {Object.values(newObj).map((concert) => (
        <ConcertCard
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
      ))}
    </div>
  );
}

export default ConcertPage;
