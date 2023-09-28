# Meet App

Meet App is a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Key-Features

- Filter Events by City.

* Show/Hide Event Details.

- Specify Number of Events.

* Use the App When Offline.

- Add an App Shortcut to the Home Screen.

* Display Charts Visualizing Event Details.

## Technology Stack

- React application

* TDD technique

- Google Calendar API and OAuth2 authentication flow

* AWS(serverless function)

- Progessive Web Application

* Object Oriented Programming

- Data visualization.

* Code Linters used are :
  - ESLint
  - Prettier

## Features, User stories and Scenarios

### Feature 1 : Filter Events by City.

#### User story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

##### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

Given user hasn’t searched for any city.
When the user opens the app.
Then the user should see a list of upcoming events.

##### Scenario 2: User should see a list of suggestions when they search for a city.

Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

##### Scenario 3: User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details.

#### User Story: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

##### Scenario 1: An event element is collapsed by default.

Given the list of events has been loaded and an event element is collapsed
When the user wants to see details he can click on the show details button to expand an event element
Then event will expand showing details for events

##### Scenario 2: User can expand an event to see details.

Given an event element can be expanded to see the details
When the user clicks on the show details button on an event element.
Then event element will expanded to show the event details

##### Scenario 3: User can collapse an event to hide details.

Given an event element can be collapsed back to hide the details.
When the user clicks the hide details button on an event element.
Then event element will be collapsed to hide the event details

### Feature 3: Specify Number of Events.

#### User Story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

##### Scenario 1:

When user hasn’t specified a number, 32 events are shown by default.

Given user has not specified the number of events.
When the user does not type anything in the number of events in the text box.
Then the user can see 32 events by default.

##### Scenario 2: User can change the number of events displayed.

Given user is on the event display page
When the user types the number of events in the number of events text box.
Then the user can see a specified number of events.

### Feature 4: Use the App When Offline.

#### User Story: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

##### Scenario 1: Show cached data when there’s no internet connection.

Given user is not connected to internet
When the user opens the app
Then the user can see the cached data when he was last logged in.

##### Scenario 2: Show error when user changes search settings (city, number of events).

Given a user trying to change the search setting while offline.
When user types city or number of events
Then an error will be displayed stating you are offline.

### Feature 5: Add an App Shortcut to the Home Screen.

#### User Story: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

##### Scenario 1: User can install the meet app as a shortcut on their device home screen.

Given user installs the meet app
When user adds the meet app to their home screen
Then user can open the app faster

### Feature 6: Display Charts Visualizing Event Details.

#### User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

##### Scenario 1: Show a chart with the number of upcoming events in each city.

Given user is on the meet events home page displaying events.
When the user sees the chart section of upcoming events in each city.
Then users can know which event is organized in which city.

## Installation

To install these project simply clone these repository on your local machine.You can refer the below link for the reference on how to clone the repository from github.

```bash
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
```

## Usage

You can open these project in Visual Studio or any text editor of your choice. you can run it on any browser whichever you prefer.

Visual Studio text editor is recommended as these project was build using Visual Studio editor.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Acknowledgment

Want to thanks different public resources which I used as a reference to make these project

#### https://react.dev/

## License

This project is licensed under the [MIT] License.Click here to see the details(https://choosealicense.com/licenses/mit/)
