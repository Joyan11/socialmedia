import { createAsyncThunk, nanoid, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const userDb = [
  {
    id: "1",
    firstName: "AJ",
    lastName: "Applegate",
    username: "bifaj",
    isAdmin: false,
    bio: "",
    profilePhoto:
      "https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    followers: ["2", "3"],
    following: ["3"],
    timeline: [],
    from: "Las Vegas",
  },
  {
    id: "2",
    firstName: "Joey",
    lastName: "Armstrong",
    username: "jamstrong",
    profilePhoto: null,
    isAdmin: false,
    bio: "",
    followers: ["1", "3"],
    following: ["1"],
    timeline: [],
    from: "Springfield",
  },
  {
    id: "3",
    firstName: "Autumn",
    lastName: "Falls",
    username: "autfall",
    isAdmin: false,
    bio: "",
    profilePhoto: null,
    followers: ["1", "2"],
    following: ["1", "2"],
    timeline: [],
    from: "Los Angelos",
  },
  {
    id: "4",
    firstName: "Billy",
    lastName: "Gilmour",
    username: "bgilmour",
    website: "www.google.com",
    profilePhoto:
      "https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "lorem ipsum.lorem ipsum. lorem lorem",
    followers: ["3", "2", "1"],
    following: ["1", "2"],
    timeline: [],
    from: "Manchester",
    isAdmin: true,
  },
];

const userSlice = createSlice({
  name: "users",
  initialState: {
    userDb: userDb,
    status: "idle",
    error: null,
  },
  reducers: {
    followButtonPressed: (state, action) => {
      const existingUser = state.userDb.find(
        (item) => item.id === action.payload
      );
      if (existingUser) {
        existingUser.followers.push("4");
      }
      const currentUser = state.userDb.find((item) => item.id === "4");
      if (currentUser) {
        currentUser.following.push(action.payload);
      }
    },
    unfollowButtonPressed: (state, action) => {
      const existingUser = state.userDb.find(
        (item) => item.id === action.payload
      );
      if (existingUser) {
        const index = existingUser.followers.indexOf("4");
        existingUser.followers.splice(index, 1);
      }
      const currentUser = state.userDb.find((item) => item.id === "4");
      if (currentUser) {
        const index = existingUser.followers.indexOf(action.payload);
        currentUser.following.splice(index, 1);
      }
    },
  },
  extraReducers: {},
});

export const {
  postAdded,
  likedPost,
  followButtonPressed,
  unfollowButtonPressed,
} = userSlice.actions;
export default userSlice.reducer;

export const selectUserById = (state, username) =>
  state.user.userDb.find((item) => item.username === username);
