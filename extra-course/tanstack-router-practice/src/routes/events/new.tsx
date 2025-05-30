import { createFileRoute } from "@tanstack/react-router";

import EventForm from "../../components/EventForm";

export const Route = createFileRoute("/events/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return <EventForm method="POST" />;
}
