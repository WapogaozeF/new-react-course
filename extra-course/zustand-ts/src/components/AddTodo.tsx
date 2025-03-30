import type React from "react";
import { useRef } from "react";
import { useAppStore } from "../store/store";

const AddTodo: React.FC = () => {
	const addTodo = useAppStore((state) => state.addTodo);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const todoText = todoTextInputRef.current?.value.trim();
		if (todoText?.length === 0) {
			return;
		}

		addTodo(todoText!);
	};

	return (
		<form onSubmit={submitFormHandler}>
			<label htmlFor="new-todo">Todo text</label>
			<input id="new-todo" type="text" ref={todoTextInputRef} />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default AddTodo;
