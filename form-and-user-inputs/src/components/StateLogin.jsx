import { useState } from "react";
import Input from "./Input";

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
	const passwordIsInvalid =
		didEdit.password && enteredValues.password.trim().length < 6;

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
				<Input
					label="email"
					id="email"
					type="email"
					name="email"
					error={emailIsInvalid && "Please enter a valid email!"}
					onBlur={() => handleInputBlur("email")}
					onChange={(event) => handleInputChange("email", event.target.value)}
					value={enteredValues.email}
				/>

				<Input
					label="password"
					id="password"
					type="password"
					name="password"
					error={passwordIsInvalid && "Please enter a valid password!"}
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
          onBlur={() => handleInputBlur("password")}
					value={enteredValues.password}
				/>
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
