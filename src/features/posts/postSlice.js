import { createAsyncThunk, nanoid, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [
    {
      id: "1",
      userid: "4",
      firstName: "Billy",
      lastName: "Gilmour",
      username: "bgilmour",
      profilePhoto: null,
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sem",
      likes: 0,
      comments: [
        {
          firstName: "Billy",
          lastName: "Gilmour",
          username: "bgilmour",
          profilePhoto: null,
          content: "What an amazing scenery mate",
          date: sub(new Date(), { minutes: 10 }).toISOString(),
        },
        {
          firstName: "Joey",
          lastName: "Salazar",
          username: "jamstrong",
          profilePhoto: null,
          content: "I'm loving It",
          date: sub(new Date(), { minutes: 10 }).toISOString(),
        },
      ],
    },
    {
      id: "2",
      userid: 2,
      firstName: "Joey",
      lastName: "Armstrong",
      username: "jamstrong",
      profilePhoto:
        "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      image:
        "https://images.pexels.com/photos/5815106/pexels-photo-5815106.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sem",
      likes: 0,
      comments: [],
    },
    {
      id: "5",
      userid: 4,
      firstName: "Billy",
      lastName: "Gilmour",
      username: "bgilmour",
      profilePhoto: null,
      image:
        "https://images.pexels.com/photos/5815106/pexels-photo-5815106.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sem",
      likes: 0,
      comments: [],
    },
    {
      id: "3",
      userid: "3",
      firstName: "Autumn",
      lastName: "Falls",
      username: "autfall",
      profilePhoto: null,
      image:
        "https://images.pexels.com/photos/5815106/pexels-photo-5815106.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sem",
      likes: 0,
      comments: [],
    },
    {
      id: "4",
      userid: "1",
      firstName: "AJ",
      lastName: "Applegate",
      username: "bifaj",
      profilePhoto: null,
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae pharetra sem",
      likes: 0,
      comments: [],
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  status: "idle",
  error: null,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            firstName: "Billy",
            lastName: "Gilmour",
            username: "bgilmour",
            profilePhoto: null,
            content,
            date: new Date().toISOString(),
            likes: 0,
            comments: [],
          },
        };
      },
    },
    likedPost: (state, action) => {
      const { id } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.likes++;
      }
    },
    commentPost: {
      reducer: (state, action) => {
        const existingPost = state.posts.find(
          (post) => post.id === action.payload.id
        );
        if (existingPost) {
          existingPost.comments.push(action.payload);
        }
      },
      prepare(content, id) {
        return {
          payload: {
            id: id,
            firstName: "Barry",
            lastName: "Kripy",
            username: "bkippy",
            profilePhoto: null,
            content,
            date: sub(new Date(), { minutes: 10 }).toISOString(),
          },
        };
      },
    },
  },
  extraReducers: {},
});

export const { postAdded, likedPost, commentPost } = postSlice.actions;
export default postSlice.reducer;

export const selectPostById = (state, id) =>
  state.post.posts.find((item) => item.id === id);
