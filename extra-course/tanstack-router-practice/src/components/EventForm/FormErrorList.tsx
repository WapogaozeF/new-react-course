import type { ErrorsList } from "../../types/errors";

const FormErrorList: React.FC<{ errors: ErrorsList }> = ({ errors }) => {
	return (
		<ul>
			{Object.values(errors).map((err) => (
				<li key={err as string}>{err as string}</li>
			))}
		</ul>
	);
};

export default FormErrorList;
