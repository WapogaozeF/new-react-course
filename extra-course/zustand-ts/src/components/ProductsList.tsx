import type React from "react";

import { useAppStore } from "../store/store";

import Product from "./Product";

const ProductsList: React.FC = () => {
	const products = useAppStore((state) => state.products);

	return (
		<ul>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
