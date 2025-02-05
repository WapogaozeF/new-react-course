export default function GameBoard({ onSelectSquare, board }) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									type="button"
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
