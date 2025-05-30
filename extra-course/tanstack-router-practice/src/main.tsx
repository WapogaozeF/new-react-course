import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import ErrorComponent from "./components/ErrorComponent";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import NotFound from "./components/NotFound";
import UnknownError from "./components/UnknownError";

// Create a new router instance
const router = createRouter({
	routeTree,
	context: { queryClient },
	defaultPreloadStaleTime: 0,
	defaultErrorComponent: UnknownError,
	defaultNotFoundComponent: NotFound,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>,
	);
}
