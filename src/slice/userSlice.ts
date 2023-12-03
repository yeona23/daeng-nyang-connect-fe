import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	id: string;
	name: string;
	email: string;
	photoURL: string;
}

const initialState: UserState = {
	id: '',
	name: '',
	email: '',
	photoURL: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
