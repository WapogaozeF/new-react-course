import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { deleteEvent } from "../queries/mutations/deleteEvent";

import { Link } from "@tanstack/react-router";

import classes from "./EventItem.module.css";

import type React from "react";
import type { Event } from "../types/event";

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
	const navigate = useNavigate();

	const mutation = useMutation(deleteEvent(event.id));

	async function startDeleteHandler() {
		const proceed = window.confirm("Are you sure?");
		if (proceed) {
			try {
				await mutation.mutateAsync();
				navigate({ to: "/events" });
			} catch (err) {
				if (err instanceof Error) alert(`Something went wrong: ${err.message}`);
			}
		}
	}

	return (
		<article className={classes.event}>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			<time>{event.date}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				<Link params={{ eventId: event.id }} to="/events/$eventId/edit">
					Edit
				</Link>
				<button type="button" onClick={startDeleteHandler}>
					Delete
				</button>
			</menu>
		</article>
	);
};

export default EventItem;
