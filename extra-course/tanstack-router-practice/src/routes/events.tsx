import { createFileRoute, Outlet } from "@tanstack/react-router";
import EventsNavigation from "../components/EventsNavigation";

export const Route = createFileRoute("/events")({
	component: EventsComponent,
});

function EventsComponent() {
	return (
		<div>
			<EventsNavigation />
			<Outlet />
		</div>
	);
}
