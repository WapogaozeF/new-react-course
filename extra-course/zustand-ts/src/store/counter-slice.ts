import type { StateCreator } from "zustand";

type CounterState = {
	count: number;
};

type CounterActions = {
	increment: () => void;
	incrementAsync: () => Promise<void>;
	decrement: () => void;
};

export type CounterSlice = CounterState & CounterActions;

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
	count: 0,
	increment: () => {
		set((state) => ({
			count: state.count + 1,
		}));
	},
	incrementAsync: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		set((state) => ({
			count: state.count + 1,
		}));
	},
	decrement: () => {
		set((state) => ({
			count: state.count - 1,
		}));
	},
});
