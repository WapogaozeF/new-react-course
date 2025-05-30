import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useEventMutation } from "../../queries/mutations/useEventMutation";

import FormErrorList from "./FormErrorList";
import EventFormField from "./EventFormField";

import classes from "./EventForm.module.css";

import type React from "react";
import type { Event } from "../../types/event";
import type { ErrorsList } from "../../types/errors";

type Props = {
	method: "PATCH" | "POST";
	event?: Event;
};

const EventForm: React.FC<Props> = ({ method, event }) => {
	const [errors, setErrors] = useState<ErrorsList | null>(null);
	const navigate = useNavigate();

	const mutation = useEventMutation({
		method,
		event,
		onValidationError: setErrors,
	});

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setErrors(null);

		const formData = new FormData(e.target as HTMLFormElement);

		const eventData = {
			title: formData.get("title") as string,
			image: formData.get("image") as string,
			date: formData.get("date") as string,
			description: formData.get("description") as string,
		};

		mutation.mutate(eventData);
	}

	function cancelHandler() {
		navigate({ to: ".." });
	}

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			{errors && <FormErrorList errors={errors} />}
			<EventFormField event={event} />
			<div className={classes.actions}>
				<button
					type="button"
					onClick={cancelHandler}
					disabled={mutation.isPending}
				>
					Cancel
				</button>
				<button type="submit" disabled={mutation.isPending}>
					{mutation.isPending ? "Submitting..." : "Save"}
				</button>
			</div>
		</form>
	);
};

export default EventForm;
