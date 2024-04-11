import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlide";
import friendReducer from "./friendSlide";
import messageReducer from "./messageSlide";

const store = configureStore({
    reducer: {
        user: userReducer,
        friends: friendReducer,
        messages: messageReducer,
    },
    });

export default store;
