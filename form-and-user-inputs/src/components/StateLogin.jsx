import { useState } from "react";

export default function StateLogin() {
	const [enteredValues, setEnteredValue] = useState({
		email: "",
		password: "",
	});

	function handleSubmit(event) {
		event.preventDefault();

		console.log(
			`User email: ${enteredValues.email}, Password: ${enteredValues.password}`,
		);
	}

	function handleInputChange(identifier, value) {
		setEnteredValue((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));
	}

	return (
		<form>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={(event) => handleInputChange("email", event.target.value)}
						value={enteredValues.email}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) =>
							handleInputChange("password", event.target.value)
						}
						value={enteredValues.password}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button" onClick={handleSubmit}>
					Login
				</button>
			</p>
		</form>
	);
}
