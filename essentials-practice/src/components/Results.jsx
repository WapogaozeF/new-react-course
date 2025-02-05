import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((yearData) => {
					const { format } = formatter;
					const { year, valueEndOfYear, interest, annualInvestment } = yearData;
					const totalInterest =
						valueEndOfYear - annualInvestment * year - initialInvestment;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

					return (
						<tr key={year}>
							<td>{year}</td>
							<td>{format(valueEndOfYear)}</td>
							<td>{format(interest)}</td>
							<td>{format(totalInterest)}</td>
							<td>{format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
