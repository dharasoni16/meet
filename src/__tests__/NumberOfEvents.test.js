import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('renders input textbox', () => {
        const eventsInput = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventsInput).toBeInTheDocument();
    });

    test('by default, the value in number of events input textbox is 32', () => {
        const eventsInput = NumberOfEventsComponent.queryByRole('textbox')
        expect(eventsInput).toHaveValue('32');
    });

    test('Value in number of events input textbox changes when user types', async () => {
        const user = userEvent.setup();
        const eventsInput = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(eventsInput, '{backspace}{backspace}10');
        expect(eventsInput).toHaveValue('10');
    });
});