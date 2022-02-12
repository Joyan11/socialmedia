import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotifications = createAsyncThunk(
  "notification/getNotification",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/notifications`
    );
    return response.data;
  }
);

export const notificationClicked = createAsyncThunk(
  "notification/seen",
  async (id) => {
    console.log(id);
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/notifications/${id}/read`
    );
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getNotifications.pending]: (state) => {
      state.status = "pending";
    },
    [getNotifications.fulfilled]: (state, action) => {
      state.status = "success";
      state.notification = action.payload.notification;
    },
    [getNotifications.rejected]: (state, action) => {
      state.status = "pending";
      state.error = action.error;
    },
    [notificationClicked.pending]: (state) => {
      state.status = "pending";
    },
    [notificationClicked.fulfilled]: (state, action) => {
      state.status = "success";
      state.notification = action.payload.notification;
    },
    [notificationClicked.rejected]: (state, action) => {
      state.status = "pending";
      state.error = action.error;
    },
  },
});

export default notificationSlice.reducer;
