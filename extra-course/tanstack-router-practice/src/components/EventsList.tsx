import { Link } from "@tanstack/react-router";
import classes from "./EventsList.module.css";

import type React from "react";
import type { Events } from "../types/event";

const EventsList: React.FC<Events> = ({ events }) => {
	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event) => (
					<li key={event.id} className={classes.item}>
						<Link
							to="/events/$eventId"
							params={{
								eventId: event.id,
							}}
						>
							<img src={event.image} alt={event.title} />
							<div className={classes.content}>
								<h2>{event.title}</h2>
								<time>{event.date}</time>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventsList;
