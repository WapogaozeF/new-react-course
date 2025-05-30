import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { queryClient } from "../../../queryClient";
import { eventQuery } from "../../../queries/event";

import EventForm from "../../../components/EventForm";

export const Route = createFileRoute("/events/$eventId/edit")({
	component: EditEventDetailPage,
	loader: async ({ params }) => {
		await queryClient.ensureQueryData(eventQuery(params.eventId));
		return {
			eventId: params.eventId,
		};
	},
});

function EditEventDetailPage() {
	const { eventId } = Route.useLoaderData();

	const { data: event } = useQuery(eventQuery(eventId));

	return <EventForm method="PATCH" event={event} />;
}
