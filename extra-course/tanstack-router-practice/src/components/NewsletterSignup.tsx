import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { submitNewsletter } from "../queries/mutations/newsletter";

import classes from "./NewsletterSignup.module.css";

import type React from "react";

function NewsletterSignup() {
	const emailRef = useRef<HTMLInputElement>(null);

	const mutation = useMutation({
		mutationFn: submitNewsletter,
		onSuccess: (data) => {
			alert(data.message);
			if (emailRef.current) emailRef.current.value = "";
		},
		onError: (error: Error) => {
			alert(error.message);
		},
	});

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const email = emailRef.current?.value;

		if (email) {
			mutation.mutate(email);
		}
	}

	return (
		<form onSubmit={handleSubmit} className={classes.newsletter}>
			<input
				ref={emailRef}
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button type="submit">Sign up</button>
		</form>
	);
}

export default NewsletterSignup;
