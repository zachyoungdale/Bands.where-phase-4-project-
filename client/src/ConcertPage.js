import {useEffect, useState} from 'react';
import ConcertCard from './ConcertCard.js'

function ConcertPage() {

    const [concerts, setConcerts] = useState([])
    // const [id, setId] = useState(0)

    function handleChange(event){
        fetch(`http://localhost:3000/cities/${event.target.value}/concerts`)
        .then((response) => response.json())
        .then(data => setConcerts(data))
    }
  
    return (
        <div>
            <select name="cities" onChange={handleChange} >
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

            {concerts.map(concert => (
                <ConcertCard 
                    key={concert.id} 
                    venue={concert.venue}
                    datetime={concert.datetime}
                    url={concert.url}
                    artist={concert.artist.name}
                    artistImage={concert.artist.image}
                />
            )
            )}
        </div>
    )

}

export default ConcertPage;