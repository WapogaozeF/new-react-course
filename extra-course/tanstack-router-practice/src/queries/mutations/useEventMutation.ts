import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";

import type { ValidationError } from "../../types/errors";
import type { Event, EventData } from "../../types/event";

export function useEventMutation({
	method,
	event,
	onValidationError,
}: {
	method: "PATCH" | "POST";
	event?: Event;
	onValidationError: (errors: any) => void;
}) {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: async (formData: EventData) => {
			const url =
				method === "PATCH" && event
					? `http://localhost:8080/events/${event.id}`
					: "http://localhost:8080/events";

			const response = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.status === 422) {
				const data = await response.json();
				throw { type: "validation", errors: data.errors };
			}

			if (!response.ok) {
				throw new Error("Could not save event.");
			}
		},
		onSuccess: () => {
			navigate({ to: "/events" });
		},
		onError: (error: unknown) => {
			if (
				typeof error === "object" &&
				error !== null &&
				"type" in error &&
				(error as ValidationError).type === "validation"
			) {
				onValidationError((error as ValidationError).errors);
			} else {
				alert((error as Error).message);
			}
		},
	});
}
