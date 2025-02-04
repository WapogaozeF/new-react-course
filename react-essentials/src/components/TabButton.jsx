export default function TabButton({ children, isSelected, ...props }) {
	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				type="button"
				{...props}
			>
				{children}
			</button>
		</li>
	);
}
