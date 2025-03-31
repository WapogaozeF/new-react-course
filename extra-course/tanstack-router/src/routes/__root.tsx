import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<div>
				<Link to="/">Home</Link>
				{/* <Link to="/posts" search={{ q: "post1" }}>
					Posts
				</Link> */}
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
			</div>
			<Outlet />
			<footer>"__root" footer.</footer>
			<TanStackRouterDevtools />
		</React.Fragment>
	);
}
