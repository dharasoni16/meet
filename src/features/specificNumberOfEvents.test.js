import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specificNumberOfEvents.feature');
defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('on events display page the list of events are loaded.', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeInTheDocument();
            })
        });

        when('the user does not type anything in the text box of number of events.', () => {
            AppComponent = render(<App />);
        });

        then('the user can see 32 events by default.', () => {
            expect(eventList.length).toBe(32);
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('user is on the event display page', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeInTheDocument();
            });
        });

        when('the user types the number in the number of events text box.', async () => {
            const input = AppComponent.queryByTestId('number-of-eventsInput');
            await userEvent.type(input, '{backspace}{backspace}10');
        });

        then('the user can see a specified number of events.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toBe(10);
        });
    });

});