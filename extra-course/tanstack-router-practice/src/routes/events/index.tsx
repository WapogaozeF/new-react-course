import { Await, createFileRoute } from "@tanstack/react-router";
import EventsList from "../../components/EventsList";
import { Suspense } from "react";

const loader = async () => {
	const res = await fetch("http://localhost:8080/events");

	if (!res.ok) {
		throw new Error("Could not fetch events.");
	}

	const data = res.json();

	return {
		events: data,
	};
};

export const Route = createFileRoute("/events/")({
	component: RouteComponent,
	loader,
});

function RouteComponent() {
	const { events } = Route.useLoaderData();

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await promise={events}>
					{(data) => <EventsList events={data.events} />}
				</Await>
			</Suspense>
		</>
	);
}
