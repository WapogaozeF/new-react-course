import type React from "react";
import { useAppStore } from "../store/store";
import { memo } from "react";

export interface ProductType {
	id: string;
	title: string;
	price: {
		actual: number;
		cost: number;
	};
	isFavorite?: boolean;
}

const Product: React.FC<{ product: ProductType }> = memo(({ product }) => {
	const { id, title, price, isFavorite } = product;

	console.log(`Rendered ${product.title}`);

	const toggleFavorite = useAppStore((state) => state.toggleFavorite);

	return (
		<li onClick={() => toggleFavorite(id)}>
			<p>{title}</p>
			<p>
				Price: <strong>$ {price.actual}</strong>
			</p>
			{isFavorite && <p>❤️</p>}
		</li>
	);
});

export default Product;
