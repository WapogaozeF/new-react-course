import type React from "react";

import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todos";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodoContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => {
				return (
					<TodoItem
						key={item.id}
						text={item.text}
						onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
					/>
				);
			})}
		</ul>
	);
};

export default Todos;
