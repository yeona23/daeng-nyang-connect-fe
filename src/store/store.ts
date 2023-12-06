import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import communityReducer from '../slice/communitySlice';

const rootReducer = combineReducers({
	user: userReducer,
	community: communityReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
