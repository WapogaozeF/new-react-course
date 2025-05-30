import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { queryClient } from "../../queryClient";
import { eventsQuery } from "../../queries/events";

import EventsList from "../../components/EventsList";

export const Route = createFileRoute("/events/")({
	component: RouteComponent,
	loader: () => queryClient.ensureQueryData(eventsQuery),
});

function RouteComponent() {
	const { data: events, isLoading, isError, error } = useQuery(eventsQuery);

	if (isLoading) {
		return <p style={{ textAlign: "center" }}>Loading...</p>;
	}

	if (isError) {
		return <p style={{ textAlign: "center", color: "red" }}>{error.message}</p>;
	}

	return <EventsList events={events} />;
}
