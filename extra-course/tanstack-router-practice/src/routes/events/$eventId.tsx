import { Await, createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import EventItem from "../../components/EventItem";
import EventsList from "../../components/EventsList";

async function loadEvent(id: string) {
	const response = await fetch(`http://localhost:8080/events/${id}`);

	if (!response.ok) {
		throw new Error("Could not fetch event.");
	}

	const resData = await response.json();
	return resData.event;
}

async function loadEvents() {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		throw new Error("Could not fetch events.");
	}

	const resData = await response.json();
	return resData.events;
}

export const Route = createFileRoute("/events/$eventId")({
	component: RouteComponent,
	loader: async ({ params }) => {
		return {
			event: await loadEvent(params.eventId),
			events: loadEvents(),
		};
	},
});

function RouteComponent() {
	const { event, events } = Route.useLoaderData();

	return (
		<>
			<EventItem event={event} />
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await promise={events}>
					{(loadedEvents) => <EventsList events={loadedEvents} />}
				</Await>
			</Suspense>
		</>
	);
}
