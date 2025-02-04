const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard() {
	return (
		<ol id="game-board">
			{initialGameBoard.map((row, rowIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={colIndex}>
								<button type="button">{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
