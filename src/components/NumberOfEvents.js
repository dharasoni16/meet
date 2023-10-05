const NumberOfEvents = () => {

    return (
        <div id="number-of-events">
            <input type="text" value={'32'} defaultValue="32" onChange={(e) => e.target.value} />
        </div>
    );

}

export default NumberOfEvents;