import { createSlice } from '@reduxjs/toolkit';

export interface ChatAnimalInfo {
	animalId: number;
	animalName: string;
	age: string;
	breed: string;
}

const initialState: ChatAnimalInfo[] = [
	{
		animalId: 0,
		animalName: '',
		age: '',
		breed: '',
	},
];

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		MOVE_TO_CHAT(state, action) {
			const addAnimal = action.payload;
			return { ...state, addAnimal };
		},
	},
});

export const { MOVE_TO_CHAT } = chatSlice.actions;

export default chatSlice.reducer;
