import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, and, when, then }) => {
        let AppComponent;
        given('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        when('the user receives all the events from all locations or specific location', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            })
        });

        then('all events will be collapsed by default', () => {
            const EventDOM = AppComponent.container.firstChild;
            const eventDeatils = EventDOM.querySelector('.eventDetails');
            expect(eventDeatils).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponnet;
        given('user gets a list of events', async () => {
            AppComponnet = render(<App />);
            const AppDOM = AppComponnet.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeInTheDocument();
            });
        });

        when('the user clicks on the "Show detail" button on an event element', async () => {
            const button = AppComponnet.queryAllByText('Show Details')[0];
            await userEvent.click(button);
        });

        then('event element will expanded to show the event details of that element', () => {
            const EventDOM = AppComponnet.container.firstChild;
            const eventDetails = EventDOM.querySelector('.eventDetails');
            expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        let button;
        given('user sees the details of an events.', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeInTheDocument();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.eventDetails');
            expect(eventDetails).toBeInTheDocument();
        });

        when('the user clicks the "Hide detail" button on an event element', async () => {
            button = AppComponent.queryAllByText('Hide Details')[0];
            await userEvent.click(button);
        });

        then('event element will be collapsed and hides the event details of that element', () => {
            const EventDOM = AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.eventDetails');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

});