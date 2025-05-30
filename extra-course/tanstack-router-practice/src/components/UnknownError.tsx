import type { ErrorComponentProps } from "@tanstack/react-router";
import PageContent from "./PageContent";

const UnknownError: React.FC<ErrorComponentProps> = ({ error }) => {
	return (
		<PageContent title={"Error"}>
			<p>{error.message}</p>
		</PageContent>
	);
};

export default UnknownError;
