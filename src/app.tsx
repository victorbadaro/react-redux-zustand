import { AddTodo } from './components/add-todo';
import { TodosList } from './components/todos-list';

export function App() {
	return (
		<div>
			<TodosList />
			<AddTodo />
		</div>
	);
}
