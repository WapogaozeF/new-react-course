import { create } from "zustand";
import { createProductSlice, type ProductsSlice } from "./products-slice";
import { type CounterSlice, createCounterSlice } from "./counter-store";

export const useAppStore = create<ProductsSlice & CounterSlice>()((...a) => ({
	...createProductSlice(...a),
	...createCounterSlice(...a),
}));
