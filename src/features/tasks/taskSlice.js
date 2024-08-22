import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state[index] = { ...state[index], ...updatedTask };
    },
  },
});

export const { addTask, toggleTaskCompletion, removeTask, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
