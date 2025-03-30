import type { StateCreator } from "zustand";
import type { ProductType } from "../components/Product";

type ProductsState = {
	products: ProductType[];
};

type ProductsActions = {
	toggleFavorite: (productId: string) => void;
};

export type ProductsSlice = ProductsState & ProductsActions;

export const createProductSlice: StateCreator<ProductsSlice> = (set) => ({
	products: [
		{
			id: "1",
			title: "Sneakers",
			price: {
				cost: 9.99,
				actual: 14.59,
			},
		},
		{
			id: "2",
			title: "Cap",
			price: {
				cost: 2.99,
				actual: 5.99,
			},
		},
	],
	toggleFavorite: (productId) => {
		set((state) => ({
			products: state.products.map((product) =>
				product.id === productId
					? { ...product, isFavorite: !product.isFavorite }
					: product,
			),
		}));
	},
});
