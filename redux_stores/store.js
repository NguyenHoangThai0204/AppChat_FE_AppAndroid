import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlide";
import friendReducer from "./friendSlide";

const store = configureStore({
    reducer: {
        user: userReducer,
        friends: friendReducer,
    },
    });

export default store;
