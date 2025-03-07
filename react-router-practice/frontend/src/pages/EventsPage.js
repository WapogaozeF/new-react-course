import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
	{
		id: "ev1",
		title: "Event 1",
	},
	{
		id: "ev2",
		title: "Event 2",
	},
	{
		id: "ev3",
		title: "Event 3",
	},
];

function EventsPage() {
	return (
		<>
			<h1>Events Page!</h1>
			<ul>
				{DUMMY_EVENTS.map((event) => (
					<li key={event.id}>
						<Link to={`/events/${event.id}`}>{event.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default EventsPage;
