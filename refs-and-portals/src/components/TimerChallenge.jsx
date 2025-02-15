import { useState, useRef } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

	const timerIsActive =
		timerRemaining > 0 && timerRemaining < targetTime * 1000;

	if (timerRemaining < 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimerRemaining(targetTime * 1000);
	}

	function handleStart() {
		timer.current = setInterval(() => {
			setTimerRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
		}, 10);
	}

	function handleStop() {
		dialog.current.open();
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				remainingTime={timerRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button
						type="button"
						onClick={timerIsActive ? handleStop : handleStart}
					>
						{timerIsActive ? "Stop" : "Start"} Challenge
					</button>
				</p>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
}
