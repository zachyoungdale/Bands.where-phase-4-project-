import Moment from 'react-moment'

function ConcertCard({setUsersConcerts, id, venue, datetime, url, artist, artistImage, concert}) {

  function handleGoing(concertObj) {
    setUsersConcerts(prev => [...prev, concertObj])
  }
        
    function dateAndLinks(){
        if (Array.isArray(datetime)) {
            return (
                <div>
                <h4>Showings</h4>
                {datetime.map((datetime, i) => {
                    return (
                        <div>
                            <Moment date={datetime} format="LLLL"/>
                            <br></br>
                            <a href={url[i]}>Buy Tickets</a>
                        </div>
                    )
                })}
                </div>
            )
        } else {
            return (
                <div>
                    <Moment date={datetime} format="LLLL"/>
                    <br></br>
                    <a href={url}>Buy Tickets</a>
                </div>
            )
        }
    }

    return (
        <div>
            <img alt={artist} src={artistImage}></img>
            <p>{artist}</p>
            <p>at {venue}</p>
            {dateAndLinks()}
            <button onClick={(e) => handleGoing(concert)}>I'm Going to This Concert!</button>
        </div>
    )

}

export default ConcertCard;