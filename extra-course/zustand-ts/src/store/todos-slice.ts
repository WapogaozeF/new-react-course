import type { StateCreator } from "zustand";

type TodoState = {
	todos: Set<string>;
};

type TodoActions = {
	addTodo: (todoText: string) => void;
	removeTodo: (todoText: string) => void;
};

export type TodoSlice = TodoState & TodoActions;

export const createTodoSlice: StateCreator<TodoSlice> = (set) => ({
	todos: new Set<string>(),
	addTodo: (todoText: string) => {
		set((state) => ({
			todos: new Set(state.todos).add(todoText),
		}));
	},
	removeTodo: (todoText: string) => {
		set((state) => {
			const newTodos = new Set(state.todos);
			newTodos.delete(todoText);

			return {
				todos: newTodos,
			};
		});
	},
});
