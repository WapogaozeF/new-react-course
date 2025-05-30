import { queryClient } from "../../queryClient";

export const deleteEvent = (eventId: string) => {
	return {
		mutationFn: async () => {
			const response = await fetch(`http://localhost:8080/events/${eventId}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete event.");
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["events", `event:${eventId}`],
			});
		},
	};
};
