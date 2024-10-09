import { useAppSelector } from '@/store';

export function TodosList() {
	const todos = useAppSelector(store => store.todos);

	return (
		<ul>
			{todos.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</ul>
	);
}
