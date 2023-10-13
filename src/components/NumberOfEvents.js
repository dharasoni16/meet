const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        let errorText;
        if (isNaN(value)) {
            errorText = "Entered value is not a number";
            setErrorAlert(errorText);
        } else if (value <= 0) {
            errorText = "Please enter the value greater than 0";
            setErrorAlert(errorText);
        } else {
            setErrorAlert("");
            setCurrentNOE(value);

        }
    }
    return (
        <div id="number-of-events">
            <label htmlFor='number-of-events-input'>Number of Events: </label>
            <input type="text" defaultValue="32" onChange={handleInputChanged} id="number-of-events-input" data-testid="number-of-eventsInput" />
        </div>
    );

}

export default NumberOfEvents;