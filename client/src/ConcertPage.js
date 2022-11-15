import { useState } from "react";
import ConcertCard from "./ConcertCard.js";

function ConcertPage() {
  const [concerts, setConcerts] = useState([]);

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

  // const filterArray = ['Post Malone', 'Fletcher'];

  // const filteredConcerts = concerts.filter(concert => filterArray.includes(concert.artist.name))

  return (
    <div>
      <select name="cities" onChange={handleChange}>
        <option value="">Select your city...</option>
        <option value="1">San Antonio</option>
        <option value="2">New York</option>
        <option value="3">Los Angeles</option>
        <option value="4">Chicago</option>
        <option value="5">Philadelphia</option>
        <option value="6">San Francisco</option>
        <option value="7">Washington DC</option>
        <option value="8">Miami</option>
        <option value="9">Austin</option>
        <option value="10">Boston</option>
      </select>

      <select name="sortBy" onChange={handleSort}>
        <option value="date">Sort by Date</option>
        <option value="artist">Sort by Artist</option>
        <option value="venue">Sort by Venue</option>
      </select>

      {concerts.map((concert) => (
        <ConcertCard
          key={concert.id}
          venue={concert.venue}
          datetime={concert.datetime}
          url={concert.url}
          artist={concert.artist.name}
          artistImage={concert.artist.image}
        />
      ))}
    </div>
  );
}

export default ConcertPage;
