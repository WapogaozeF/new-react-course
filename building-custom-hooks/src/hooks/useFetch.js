import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialValue);

	useEffect(() => {
		async function fetchedData() {
			setIsFetching(true);
			try {
				const data = await fetchFn();
				setFetchedData(data);
			} catch (error) {
				setError({ message: error.message || "Failed to fetch data." });
			}

			setIsFetching(false);
		}

		fetchedData();
	}, [fetchFn]);

	return { isFetching, error, fetchedData, setFetchedData };
}
