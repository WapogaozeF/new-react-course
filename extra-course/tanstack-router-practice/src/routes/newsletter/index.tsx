import { createFileRoute } from "@tanstack/react-router";
import NewsletterSignup from "../../components/NewsletterSignup";
import PageContent from "../../components/PageContent";

export const Route = createFileRoute("/newsletter/")({
	component: NewsletterSComponent,
});

function NewsletterSComponent() {
	return (
		<PageContent title="Join our awesome newsletter!">
			<NewsletterSignup />
		</PageContent>
	);
}
