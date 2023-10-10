Feature: Show/hide event details

    Scenario: An event element is collapsed by default.
        Given the user opens the app
        When the user receives all the events from all locations or specific location
        Then all events will be collapsed by default

    Scenario: User can expand an event to see details.
        Given user gets a list of events
        When the user clicks on the "Show detail" button on an event element
        Then event element will expanded to show the event details of that element

    Scenario: User can collapse an event to hide details.
        Given user sees the details of an events.
        When the user clicks the "Hide detail" button on an event element
        Then event element will be collapsed and hides the event details of that element