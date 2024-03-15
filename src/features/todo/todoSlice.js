import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [{id: 1, text: "Hello world", description: ""}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {text, description} = action.payload;
            const todo = {
                id: nanoid(), 
                text,
                description
            };
            state.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        // removeTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload );
        //     localStorage.setItem('todos', JSON.stringify(state.todos));
        // },
        removeTodo: (state, action) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
            if (todoIndex !== -1) {
                state.todos.splice(todoIndex, 1);
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
    }
});


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer