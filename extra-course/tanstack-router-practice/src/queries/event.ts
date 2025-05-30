import { queryOptions } from "@tanstack/react-query";

export const eventQuery = (eventId: string) =>
	queryOptions({
		queryKey: ["event", eventId],
		queryFn: async () => {
			const res = await fetch(`http://localhost:8080/events/${eventId}`);
			if (!res.ok) throw new Error("Could not fetch event.");
			const data = await res.json();
			return data.event;
		},
	});
