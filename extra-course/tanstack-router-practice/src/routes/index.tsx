import { createFileRoute } from "@tanstack/react-router";
import PageContent from "../components/PageContent";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<PageContent title="Welcome!">
			<p>Browse all amazing events!</p>
		</PageContent>
	);
}
