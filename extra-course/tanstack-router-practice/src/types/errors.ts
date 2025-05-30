export type ErrorsList = Record<string, string>;

export type ValidationError = Error & {
	type: "validation";
	errors: ErrorsList;
};
