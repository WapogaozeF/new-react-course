import { Await, createFileRoute } from "@tanstack/react-router";
import EventsList from "../../components/EventsList";
import { Suspense } from "react";

const loader = async () => {
	const promise = fetch("http://localhost:8080/events").then((res) => {
		if (!res.ok) throw new Error("Could not fetch events.");
		return res.json();
	});

	return {
		events: promise,
	};
};

export const Route = createFileRoute("/events/")({
	component: RouteComponent,
	loader,
});

function RouteComponent() {
	const { events } = Route.useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
			<Await promise={events}>
				{(data) => <EventsList events={data.events} />}
			</Await>
		</Suspense>
	);
}
