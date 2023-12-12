import { createSlice } from '@reduxjs/toolkit';

export interface ReviewState {
	adoptedAnimalName: string;
	textReview: string;
	createsAt: string;
	image: Array<string>;
}

const initialState: ReviewState = {
	adoptedAnimalName: '',
	textReview: '',
	createsAt: '',
	image: [],
};

const reviewSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		SET_TEXT_REVIEW(state, action) {
			return {
				...state,
				textReview: action.payload,
			};
		},
		SET_INPUT_VALUE(state, action) {
			return {
				...state,
				place: action.payload.place,
				breed: action.payload.breed,
				text: action.payload.text,
				title: action.payload.title,
			};
		},
	},
});

export const { SET_TEXT_REVIEW } = reviewSlice.actions;
export default reviewSlice.reducer;
