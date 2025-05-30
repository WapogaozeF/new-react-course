import PageContent from "./PageContent";

const ErrorComponent: React.FC<{ title: string; message: string }> = ({
	title,
	message,
}) => {
	return (
		<PageContent title={title}>
			<p>{message}</p>
		</PageContent>
	);
};

export default ErrorComponent;
