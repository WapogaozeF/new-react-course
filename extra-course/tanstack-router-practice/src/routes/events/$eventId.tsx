import { createFileRoute, Outlet } from "@tanstack/react-router";

import { queryClient } from "../../queryClient";
import { eventQuery } from "../../queries/event";

export const Route = createFileRoute("/events/$eventId")({
	loader: async ({ params }) => {
		await queryClient.ensureQueryData(eventQuery(params.eventId));
		return { eventId: params.eventId };
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
