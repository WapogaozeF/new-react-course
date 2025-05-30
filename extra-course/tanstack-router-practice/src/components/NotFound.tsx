import ErrorComponent from "./ErrorComponent";

export default function NotFound() {
	return (
		<ErrorComponent
			title="Not found!"
			message="Could not find resource or page."
		/>
	);
}
