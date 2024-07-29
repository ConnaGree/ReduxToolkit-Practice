import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const todoSlice = createSlice ({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({id: state.length + 1, text: action.payload, completed: false})
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todoToBeToggled = state.find(todo => todo.id === action.payload)
            if(todoToBeToggled) {
                todoToBeToggled.completed = !todoToBeToggled.completed
            }
        }
    }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer
