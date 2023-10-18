import { useState } from "react";
const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <p>{event.summary}</p>
            <p>{(new Date(event.created)).toUTCString()}</p>
            <p>{event.location}</p>
            {showDetails ? (
                <div className="eventDetails">
                    <h3>Event Details</h3>
                    <p>Description:{event.description}</p>
                    <p>status:{event.status}</p>
                </div>
            ) : null}
            <button className="details-btn" onClick={() => { setShowDetails(!showDetails) }}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
        </li>
    );
}

export default Event;