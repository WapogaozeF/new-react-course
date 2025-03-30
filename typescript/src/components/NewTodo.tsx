import type React from "react";

import { useContext, useRef } from "react";
import { TodoContext } from "../store/todos";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodoContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText?.trim().length === 0) {
			return;
		}

		todosCtx.addTodo(enteredText.trim());
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label>Todo text</label>
			<input type="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
