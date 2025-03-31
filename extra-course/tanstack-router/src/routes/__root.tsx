import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<div>Hello "__root"!</div>
			<Outlet />
      <footer>"__root" footer.</footer>
		</React.Fragment>
	);
}
