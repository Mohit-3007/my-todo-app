import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

console.log("initialState ", initialState)

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state));
          },
        markAsCompleted: (state, action) => {
            const taskId = action.payload;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state[taskIndex].taskStatus = "Completed";
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        markAsNotCompleted: (state, action) => {
            const taskId = action.payload;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state[taskIndex].taskStatus = "Pending";
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        deleteTodo: (state, action) => {
            const taskId = action.payload;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state.splice(taskIndex, 1);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        editTodo: (state, action) => {
            const taskId = action.payload.id;
            const taskIndex = state.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                state[taskIndex] = { ...state[taskIndex], ...action.payload };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        clearAllCompletedTodos: (state) => {
            const pendingTodos = state.filter(state => {
                return state.taskStatus === "Pending";
            })
            console.log("pendingTodos ", pendingTodos)
            localStorage.setItem('tasks', JSON.stringify(pendingTodos));
            return pendingTodos;
        }


    }
})

export const { addTask, markAsCompleted, markAsNotCompleted, deleteTodo, editTodo, clearAllCompletedTodos } = todoSlice.actions;

export default todoSlice.reducer;