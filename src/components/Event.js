import { useState } from "react";
const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li>
            <p>{event.summary}</p>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button onClick={() => { setShowDetails(!showDetails) }}>{showDetails ? 'hide details' : 'show details'}</button>
            {showDetails ? (
                <div className="eventDetails">
                    <h3>Event Details</h3>
                    <p>Description:{event.description}</p>
                    <p>status:{event.status}</p>
                </div>
            ) : null}
        </li>
    );
}

export default Event;