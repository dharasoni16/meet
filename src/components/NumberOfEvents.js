const NumberOfEvents = ({ setCurrentNOE }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
    }

    return (
        <div id="number-of-events">
            <label htmlFor='number-of-events-input'>Number of Events: </label>
            <input type="text" defaultValue="32" onChange={handleInputChanged} id="number-of-events-input" data-testid="number-of-eventsInput" />
        </div>
    );

}

export default NumberOfEvents;