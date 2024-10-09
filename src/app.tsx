import { Provider as ReduxProvider } from 'react-redux';
import { AddTodo } from './components/add-todo';
import { TodosList } from './components/todos-list';
import { store } from './store';

export function App() {
	return (
		<ReduxProvider store={store}>
			<TodosList />
			<AddTodo />
		</ReduxProvider>
	);
}
