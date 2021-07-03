import { createAsyncThunk, nanoid, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const notification = [
  {
    type: "LIKE",
    read: true,
    postID: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    targetUser: "billy",
    sourceUser: "AJ",
  },
  {
    type: "COMMENT",
    read: false,
    postID: "5",
    date: sub(new Date(), { minutes: 12 }).toISOString(),
    targetUser: "billy",
    sourceUser: "Autumn",
  },
  {
    type: "FOLLOW",
    read: false,
    postID: "1",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    targetUser: "billy",
    sourceUser: "joey",
  },
];

const notificationSlice = createSlice({
  name: "unotification",
  initialState: {
    notification: notification,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default notificationSlice.reducer;
