import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {

    }
})

export default todoSlice.reducer;