import { createFileRoute, Outlet } from "@tanstack/react-router";
import EventsNavigation from "../components/EventsNavigation";

export const Route = createFileRoute("/events")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<EventsNavigation />
			<Outlet />
		</div>
	);
}
