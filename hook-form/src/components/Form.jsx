import { useState } from "react";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const createUser = (e) => {
		e.preventDefault();

		const newUser = { firstName, lastName, email, password, confirmPassword };
		console.log("Welcome", newUser);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	return (
		<div className="card shadow w-50 mx-auto">
			<div className="card-header">Create User Form</div>
			<div className="card-body">
				<form onSubmit={createUser}>
					<div className="mb-3">
						<label className="form-label">First Name:</label>
						<input
							type="text"
							className="form-control"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Last Name:</label>
						<input
							type="text"
							className="form-control"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Email:</label>
						<input
							type="text"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Password:</label>
						<input
							type="password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password:</label>
						<input
							type="password"
							className="form-control"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3 text-center">
						{/* <button type="submit" className="btn btn-success">
							Submit
						</button> */}
					</div>
				</form>
			</div>
			<div className="card-footer">
				<p className="text-center">Your Form Data</p>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>email: {email}</p>
				<p>Password: {password}</p>
				<p>Confirm Password: {confirmPassword}</p>
			</div>
		</div>
	);
};

export default Form;
