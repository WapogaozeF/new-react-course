import { create } from "zustand";
import { createProductSlice, type ProductsSlice } from "./products-slice";
import { createCounterSlice, type CounterSlice } from "./counter-slice";
import { createTodoSlice, type TodoSlice } from "./todos-slice";

export const useAppStore = create<ProductsSlice & CounterSlice & TodoSlice>()(
	(...a) => ({
		...createProductSlice(...a),
		...createCounterSlice(...a),
		...createTodoSlice(...a),
	}),
);
