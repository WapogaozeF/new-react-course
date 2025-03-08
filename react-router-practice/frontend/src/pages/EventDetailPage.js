import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
	const data = useLoaderData();

	return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
	const response = await fetch(
		`http://localhost:8080/events/${params.eventId}`,
	);

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
			status: 500,
		});
	}

	return response;
}
