import type React from "react";
import { useAppStore } from "../store/store";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { useShallow } from "zustand/shallow";

const Todos: React.FC = () => {
	const todos = useAppStore(useShallow((state) => state.todos));

	return (
		<div>
			<AddTodo />
			<ul>
				{Array.from(todos).map((todo) => (
					<TodoItem key={todo} todoText={todo} />
				))}
			</ul>
		</div>
	);
};

export default Todos;
