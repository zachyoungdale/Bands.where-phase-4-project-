import Moment from "react-moment";

function MyConcertCard(props) {
            
        function dateAndLinks(){
            if (Array.isArray(props.datetime)) {
                return (
                    <div>
                    <h4>Showings</h4>
                    {props.datetime.map((datetime, i) => {
                        return (
                            <div>
                                <Moment date={datetime} format="LLLL"/>
                                <br></br>
                                <a href={props.url[i]}>Buy Tickets</a>
                            </div>
                        )
                    })}
                    </div>
                )
            } else {
                return (
                    <div>
                        <Moment date={props.datetime} format="LLLL"/>
                        <br></br>
                        <a href={props.url}>Buy Tickets</a>
                    </div>
                )
            }
        }
    
        return (
            <div>
                <img alt={props.artist} src={props.artistImage}></img>
                <p>{props.artist}</p>
                <p>at {props.venue}</p>
                {dateAndLinks()}
            </div>
        )
    
    }
    
    export default MyConcertCard;