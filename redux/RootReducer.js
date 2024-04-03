import { combineReducers } from "redux";

import userReducer from "../redux/user/UserReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  //...
  key: "mai-chat-app",
  storage: storage,
}

const rootReducer = combineReducers({
  user: userReducer,
});


export default persistReducer(persistConfig, rootReducer);
