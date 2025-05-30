import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import EventItem from "../../components/EventItem";
import EventsList from "../../components/EventsList";
import { queryClient } from "../../queryClient";
import { eventQuery } from "../../queries/event";
import { eventsQuery } from "../../queries/events";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/events/$eventId")({
	component: EventDetailPage,
	loader: async ({ params }) => {
		await queryClient.ensureQueryData(eventQuery(params.eventId));
		return { eventId: params.eventId };
	},
});

function EventDetailPage() {
	const { eventId } = Route.useLoaderData();

	const {
		data: event,
		isLoading: eventLoading,
		isError: eventError,
	} = useQuery(eventQuery(eventId));

	const {
		data: events,
		isLoading: eventsLoading,
		isError: eventsError,
	} = useQuery(eventsQuery);

	if (eventLoading)
		return <p style={{ textAlign: "center" }}>Loading event...</p>;
	if (eventError) return <p>Error loading event</p>;

	return (
		<>
			<EventItem event={event} />
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading events...</p>}
			>
				{!eventsLoading && !eventsError && <EventsList events={events} />}
			</Suspense>
		</>
	);
}
