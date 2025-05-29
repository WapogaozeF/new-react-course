import {
	Outlet,
	createRootRoute,
	useRouterState,
} from "@tanstack/react-router";
import MainNavigation from "../components/MainNavigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const isLoading = useRouterState({
		select: (s) => s.status === "pending",
	});

	return (
		<>
			<MainNavigation />
			<main>
				{isLoading && <p>Loading...</p>}
				<Outlet />
			</main>
			<ReactQueryDevtools buttonPosition="top-right" />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
