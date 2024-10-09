import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
	name: 'todo',
	initialState: ['Fazer café', 'Estudar Redux'],
	reducers: {}
});

export const store = configureStore({
	reducer: {
		todos: todosSlice.reducer
	}
});
