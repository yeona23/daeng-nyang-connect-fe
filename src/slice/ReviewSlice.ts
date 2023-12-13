import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReviewState {
	reviews: ReviewItem[];
}

export interface ReviewItem {
	adoptedAnimalName: string;
	adoptedDate: string;
	age: string;
	textReview: string;
	createdAt: string;
	images: string[];
}

const initialState: ReviewState = {
	reviews: [],
};

const reviewSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		SET_INPUT_VALUE(state, action: PayloadAction<ReviewItem>) {
			state.reviews.push(action.payload);
		},
		DELETE_REVIEW_ITEM(state, action: PayloadAction<number>) {
			state.reviews.splice(action.payload, 1);
		},
	},
});

export const { SET_INPUT_VALUE, DELETE_REVIEW_ITEM } = reviewSlice.actions;
export default reviewSlice.reducer;

export const addReviewItem = (reviewData: ReviewItem) => {
	return (dispatch: any) => {
		dispatch(SET_INPUT_VALUE(reviewData));
	};
};
