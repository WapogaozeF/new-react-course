import fs from "node:fs/promises";

import { Suspense } from "react";

import UsePromiseDemo from "@/components/UsePromisesDemo";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
	const fetchUsersPromise = new Promise((resolve) =>
		setTimeout(async () => {
			const data = await fs.readFile("dummy-db.json", "utf-8");
			const users = JSON.parse(data);
			resolve(users);
		}, 2000),
	);

	return (
		<main>
			<ErrorBoundary>
				<Suspense fallback={<p>Loading users...</p>}>
					<UsePromiseDemo usersPromise={fetchUsersPromise} />
				</Suspense>
			</ErrorBoundary>
		</main>
	);
}
