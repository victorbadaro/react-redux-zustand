import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const todosSlice = createSlice({
	name: 'todos',
	initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],
	reducers: {
		add: (state, action) => {
			state.push(action.payload.newTodo);
		}
	}
});

export const store = configureStore({
	reducer: {
		todos: todosSlice.reducer
	}
});

export const { add } = todosSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
