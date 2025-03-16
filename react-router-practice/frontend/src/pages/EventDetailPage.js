import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
	const data = useRouteLoaderData("event-detail");

	return <EventItem method="POST" event={data.event} />;
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

export async function action({ params, request }) {
	const eventId = params.eventId;
	const response = await fetch(`http://localhost:8080/events/${eventId}`, {
		method: request.method,
	});

	if (!response.ok) {
		throw new Response(JSON.stringify({ message: "Could not delete event." }), {
			status: 500,
		});
	}
	return redirect("/events");
}
