import Event from "../components/Event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";

const mockEvent = mockData[0];

describe('<Event/> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    });

    test('renders events title', () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(mockEvent.created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default,events details section must be hidden', () => {
        const eventDOM = EventComponent.container.firstChild;
        expect(eventDOM.querySelector('.eventDetails')).not.toBeInTheDocument();
    });

    test('shows the details section when user clicks on the show details button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('show details');
        await user.click(button);

        const eventDOM = EventComponent.container.firstChild;
        expect(eventDOM.querySelector('.eventDetails')).toBeInTheDocument();
    });


    test('hides the details section when user clicks on the hide details button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('hide details');
        await user.click(button);

        const eventDOM = EventComponent.container.firstChild;
        expect(eventDOM.querySelector('.eventDetails')).not.toBeInTheDocument();
    });
})