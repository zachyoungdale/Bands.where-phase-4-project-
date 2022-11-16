import { useState } from "react";
import ConcertCard from "./ConcertCard.js";

function ConcertPage(spotifyArtists={spotifyArtists}) {
  const [concerts, setConcerts] = useState([]);

  console.log(spotifyArtists.items)

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

  // change this array to the list of spotifyArtists
  const filterArray = ['Post Malone', 'Fletcher', 'Turnover', 'Secrets', 'Trans-Siberian Orchestra', 'The Flaming Lips', 'Trampled by Turtles', 'Christian Scott', 'Bobby Shmurda'];

  const filteredConcerts = concerts.filter(concert => filterArray.includes(concert.artist.name))

  const newObj = {}
  for (const c of filteredConcerts){
    if (!newObj[c.artist.name + c.venue]){
        newObj[c.artist.name + c.venue] = {id: c.id, venue: c.venue, datetime: c.datetime, url: c.url, artist: {id: c.artist.id, name: c.artist.name, image: c.artist.image}, city: {id: c.city.id, name: c.city.name}}
    } else {
        //add showings
        let preexistingDatetime = newObj[c.artist.name + c.venue].datetime
        if (!Array.isArray(preexistingDatetime)){
            preexistingDatetime = [preexistingDatetime, c.datetime]
        } else {
            preexistingDatetime.push(c.datetime)
        }
        newObj[c.artist.name + c.venue].datetime = preexistingDatetime
        //add urls
        let preexistingLinks = newObj[c.artist.name + c.venue].url
        if (!Array.isArray(preexistingLinks)){
            preexistingLinks = [preexistingLinks, c.url]
        } else {
            preexistingLinks.push(c.url)
        }
        newObj[c.artist.name + c.venue].url = preexistingLinks
    }
  }

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
        <option value="7">Nashville</option>
        <option value="8">Miami</option>
        <option value="9">Austin</option>
        <option value="10">Boston</option>
      </select>

      <select name="sortBy" onChange={handleSort}>
        <option value="date">Sort by Date</option>
        <option value="artist">Sort by Artist</option>
        <option value="venue">Sort by Venue</option>
      </select>

      {Object.values(newObj).map((concert) => (
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
