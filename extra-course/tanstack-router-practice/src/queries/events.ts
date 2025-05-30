import { queryOptions } from "@tanstack/react-query";

export const eventsQuery = queryOptions({
	queryKey: ["events"],
	queryFn: async () => {
		const res = await fetch("http://localhost:8080/events");
		if (!res.ok) throw new Error("Could not fetch events.");
		const data = await res.json();
		return data.events;
	},
});
