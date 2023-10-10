Feature: Specify number of events

    Scenario:When user hasn’t specified a number, 32 events are shown by default.
        Given on events display page the list of events are loaded.
        When the user does not type anything in the text box of number of events.
        Then the user can see 32 events by default.

    Scenario: User can change the number of events displayed.
        Given user is on the event display page
        When the user types the number in the number of events text box.
        Then the user can see a specified number of events.
