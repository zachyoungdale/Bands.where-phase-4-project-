import Moment from "react-moment";

function MyConcertCard({ id, venue, datetime, url, artist, artistImage, concert, setUsersConcerts}) {

    function handleDelete(obj) {
        setUsersConcerts(prev => prev.filter(item => item != obj))
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
                <button onClick={(e) => handleDelete(concert)}>I'm Not Going Anymore</button>
            </div>
        )
    
    }
    
    export default MyConcertCard;