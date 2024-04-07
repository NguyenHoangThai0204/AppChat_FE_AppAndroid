import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
};

const userSlide = createSlice({
    name: 'user',
    initialState: {
        initialState,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setUserAvatar: (state, action) => {
            state.currentUser.avatar = action.payload;
        }
    },
});

export const { setCurrentUser, setUserAvatar } = userSlide.actions;

export default userSlide.reducer;