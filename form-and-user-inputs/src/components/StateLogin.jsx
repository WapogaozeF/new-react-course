import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput("", (value) => {
		return isEmail(value) && isNotEmpty(value);
	});

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput("", (value) => hasMinLength(value, 6));

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(`User email: ${emailValue}, Password: ${passwordValue}`);
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
					error={emailHasError && "Please enter a valid email!"}
					onBlur={handleEmailBlur}
					onChange={handleEmailChange}
					value={emailValue}
				/>

				<Input
					label="password"
					id="password"
					type="password"
					name="password"
					error={passwordHasError && "Please enter a valid password!"}
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
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
