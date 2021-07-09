import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchUserClicked = createAsyncThunk(
  "users/Search",
  async (value, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/user?username=${value}`
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.resposne);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (username, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/user/${username}`
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "users.editProfile",
  async ({ values, image }, { fulfillWithValue, rejectWithValue }) => {
    if (image) {
      const formData = new FormData();
      const fileName = Date().now + image.name;
      formData.append("image", image);
      formData.append("name", fileName);
      try {
        const { data, status } = await axios.post(
          `${process.env.REACT_APP_SERVER}/images/upload`,
          formData
        );
        if (status === 201) {
          values.profilePicture = data.url;
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/user/update`,
        values
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const followButtonPressed = createAsyncThunk(
  "user/follow",
  async (userid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/user/follow`,
        { targetid: userid }
      );
      console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.resposne);
    }
  }
);

export const unFollowButtonPressed = createAsyncThunk(
  "user/unfollow",
  async (userid, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/user/unfollow`,
        { targetid: userid }
      );

      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getFollowers = createAsyncThunk(
  "user/followers",
  async (username) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/user/${username}/followers`
    );
    return response.data;
  }
);

export const getFollowing = createAsyncThunk(
  "user/following",
  async (username) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/user/${username}/following`
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: "",
    followers: [],
    following: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [updateProfile.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "success";
    },
    [updateProfile.pending]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [followButtonPressed.pending]: (state, action) => {
      state.status = "pending";
    },
    [followButtonPressed.fulfilled]: (state, action) => {
      state.status = "success";
      state.user.followers = action.payload.followers;
    },
    [followButtonPressed.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [unFollowButtonPressed.pending]: (state) => {
      state.status = "pending";
    },
    [unFollowButtonPressed.fulfilled]: (state, action) => {
      state.status = "success";
      state.user.followers = action.payload.followers;
    },
    [unFollowButtonPressed.rejected]: (state, action) => {
      state.status = "failed";
      state.status = action.error;
    },
    [getFollowers.pending]: (state) => {
      state.status = "pending";
    },
    [getFollowers.fulfilled]: (state, action) => {
      state.status = "success";
      state.followers = action.payload;
    },
    [getFollowers.rejected]: (state, action) => {
      state.status = "failed";
      state.status = action.error;
    },
    [getFollowing.pending]: (state) => {
      state.status = "pending";
    },
    [getFollowing.fulfilled]: (state, action) => {
      state.status = "success";
      state.following = action.payload;
    },
    [getFollowing.rejected]: (state, action) => {
      state.status = "failed";
      state.status = action.error;
    },
  },
});

export const { postAdded, likedPost, unfollowButtonPressed } =
  userSlice.actions;
export default userSlice.reducer;

export const selectUserById = (state, username) =>
  state.user.userDb.find((item) => item.username === username);
