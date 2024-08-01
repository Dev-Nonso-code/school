import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationCount: 0,
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    countNotification: (state, action) => {
      state.notificationCount += 1;
    },
    resetNotification: (state) => {
      state.notificationCount = 0;
    },
  },
});

export default messageSlice.reducer;
export const { countNotification, resetNotification } = messageSlice.actions;