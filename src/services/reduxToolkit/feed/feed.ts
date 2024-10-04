import {createSlice} from '@reduxjs/toolkit';
import {feedInitialState} from './interface';

const FeedData = createSlice({
  name: 'feed',
  initialState: {
    data: [],
  } as feedInitialState,

  reducers: {
    addFeedData: (state, action) => {
      state.data = action.payload;
    },
    likePost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.data.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        state.data[postIndex].likes += 1;
      }
    },
    unLikePost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.data.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        state.data[postIndex].dislikes += 1;
      }
    },
    removeFeedData: state => {
      state.data = [];
    },
  },
});

export const {addFeedData, removeFeedData, likePost, unLikePost} =
  FeedData.actions;
export default FeedData.reducer;
