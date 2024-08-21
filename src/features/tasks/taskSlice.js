// src/features/tasks/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      if (state.tasks[index]) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
