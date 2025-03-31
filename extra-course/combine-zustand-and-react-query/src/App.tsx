import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/user";
import { useUserStore } from "./state/userStore";
import { useEffect } from "react";

function App() {
	const { users, setUsers } = useUserStore();

	const { data } = useQuery({
		queryKey: ["users"],
		queryFn: () => getUsers(),
	});

	useEffect(() => {
		if (data) {
			setUsers(data);
		}
	}, [data, setUsers]);

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}

export default App;
