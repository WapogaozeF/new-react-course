import classes from "./EventsNavigation.module.css";
import { Link } from "@tanstack/react-router";

function EventsNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<Link
							to="/events"
							activeProps={{
								className: classes.active,
							}}
							activeOptions={{
								exact: true,
							}}
						>
							All Events
						</Link>
					</li>
					<li>
						<Link
							to="/events/new"
							activeProps={{
								className: classes.active,
							}}
						>
							New Event
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default EventsNavigation;
