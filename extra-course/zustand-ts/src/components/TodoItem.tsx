import type React from "react";
import { useAppStore } from "../store/store";
import { memo } from "react";

const TodoItem: React.FC<{ todoText: string }> = memo(({ todoText }) => {
	const removeTodo = useAppStore((state) => state.removeTodo);

	console.log(`Rendered ${todoText}`);

	return <li onClick={() => removeTodo(todoText)}>{todoText}</li>;
});

export default TodoItem;
