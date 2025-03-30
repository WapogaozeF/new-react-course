import Todo from "../model/todo";

import React, { useState } from "react";

type TodosContextObj = {
	items: Array<Todo>;
	addTodo: (todoText: string) => void;
	removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: (todoText: string) => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children?: React.ReactNode }> = (
	props,
) => {
	const [todos, setTodos] = useState<Array<Todo>>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo);
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodoContext.Provider value={contextValue}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodosContextProvider;
