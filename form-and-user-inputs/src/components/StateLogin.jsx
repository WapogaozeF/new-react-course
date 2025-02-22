import { useState } from "react";

export default function StateLogin() {
	const [enteredValues, setEnteredValue] = useState({
		email: "",
		password: "",
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

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
		setDidEdit((prevValues) => ({
			...prevValues,
			[identifier]: false,
		}));
	}

	function handleInputBlur(identifier) {
		setDidEdit((prevValues) => ({
			...prevValues,
			[identifier]: true,
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
						onBlur={() => handleInputBlur("email")}
						onChange={(event) => handleInputChange("email", event.target.value)}
						value={enteredValues.email}
					/>
					<div className="control-error">
						{emailIsInvalid && <p>Please enter a valid email address</p>}
					</div>
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
