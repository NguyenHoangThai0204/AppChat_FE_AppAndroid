// friendSlice.js
import { createSlice } from '@reduxjs/toolkit';

const friendSlice = createSlice({
  name: 'friends',
  initialState: [],
  reducers: {
    setFriends: (state, action) => {
      return action.payload;
    },
    addFriend: (state, action) => {
      return [...state, action.payload];
    },
    removeFriend: (state, action) => {
      return state.filter(friend => friend.id !== action.payload);
    }
  }
});

export const { setFriends, addFriend, removeFriend } = friendSlice.actions;
export default friendSlice.reducer;
