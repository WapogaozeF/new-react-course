import { useAppStore } from "./store/store";

import classes from "./App.module.css";
import ProductsList from "./components/ProductsList";

function App() {
	const count = useAppStore((state) => state.count);

	return (
		<>
			<OtherComponent count={count} />
			<ProductsList />
		</>
	);
}

const OtherComponent = ({ count }: { count: number }) => {
	const incrementAsync = useAppStore((state) => state.incrementAsync);
	const decrement = useAppStore((state) => state.decrement);

	return (
		<div className={classes.count}>
			{count}
			<div>
				<button onClick={incrementAsync}>Increment Async</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	);
};

export default App;
