import Moment from 'react-moment'

function ConcertCard(props) {

    //run: 
    // npm install --save moment
    // npm install --save react-moment
    // npminstall --save moment-timezone
    
    // console.log(props)
    return (
        <div>
            <img alt={props.artist} src={props.artistImage}></img>
            <p>{props.artist}</p>
            <p>at {props.venue}</p>
            <Moment date={props.datetime} format="LLLL"/>
            <br></br>
            <a href={props.url}>Buy Tickets</a>
        </div>
    )

}

export default ConcertCard;