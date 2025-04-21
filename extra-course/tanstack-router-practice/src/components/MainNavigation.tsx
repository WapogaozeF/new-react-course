import { Link } from "@tanstack/react-router";
import classes from "./MainNavigation.module.css";
// import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<Link
							to="/"
							activeProps={{
								className: classes.active,
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/events"
							activeProps={{
								className: classes.active,
							}}
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							to="/newsletter"
							activeProps={{
								className: classes.active,
							}}
						>
							Newsletter
						</Link>
					</li>
				</ul>
			</nav>
			{/* <NewsletterSignup /> */}
		</header>
	);
}

export default MainNavigation;
