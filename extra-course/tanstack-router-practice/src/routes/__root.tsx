import { Outlet, createRootRoute } from "@tanstack/react-router";
import MainNavigation from "../components/MainNavigation";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}
