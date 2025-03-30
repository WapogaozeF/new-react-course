import { useCounterStore } from "./store";

import classes from "./App.module.css";

function App() {
	const count = useCounterStore((state) => state.count);

	return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
	const incrementAsync = useCounterStore((state) => state.incrementAsync);
	const decrement = useCounterStore((state) => state.decrement);

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
