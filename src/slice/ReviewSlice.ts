import { createSlice } from '@reduxjs/toolkit';

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
	isLiked: boolean;
	likes: number;
	comments: Comment[];
}

interface Comment {
	id: number;
	text: string;
}

const initialState: ReviewState = {
	reviews: [],
};

const reviewSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		SET_INPUT_VALUE(state, action) {
			state.reviews.push(action.payload);
		},
		DELETE_REVIEW_ITEM(state, action) {
			state.reviews.splice(action.payload, 1);
		},
		MODIFY_REVIEW_ITEM(state, action) {
			const { index, modifiedReview } = action.payload;
			state.reviews[index] = modifiedReview;
		},
		TOGGLE_LIKE(state, action) {
			const index = action.payload;
			const review = state.reviews[index];
			review.isLiked = !review.isLiked;
			review.likes += review.isLiked ? 1 : -1;
		},
		POST_COMMENT(state, action) {
			const { index, commentText } = action.payload;
			const review = state.reviews[index];
			const newComment: Comment = {
				id: review.comments.length + 1,
				text: commentText,
			};
			review.comments.push(newComment);
		},
		DELETE_COMMENT(state, action) {
			const { reviewIndex, commentId } = action.payload;
			const review = state.reviews[reviewIndex];
			review.comments = review.comments.filter(
				(comment) => comment.id !== commentId,
			);
		},
	},
});

export const {
	SET_INPUT_VALUE,
	DELETE_REVIEW_ITEM,
	MODIFY_REVIEW_ITEM,
	TOGGLE_LIKE,
	POST_COMMENT,
	DELETE_COMMENT,
} = reviewSlice.actions;
export default reviewSlice.reducer;
