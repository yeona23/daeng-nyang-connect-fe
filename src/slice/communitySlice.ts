import { createSlice } from '@reduxjs/toolkit';
import { Board, BoardComment } from '../types/BoardTypes';

export interface CommunityState {
	category: string;
	place: string;
	reward: number;
	mobile: string;
	kind: string;
	breed: string;
	gender: string;
	color: string;
	date: string;
	time: string;
	title: string;
	text: string;
	images: File[];
	displayLabel?: string;
	subCategory: string;
	comments: BoardComment[];
	boardAll: Board[];
}

const initialState: CommunityState = {
	category: '',
	place: '',
	reward: 0,
	mobile: '',
	kind: '',
	breed: '',
	gender: '',
	color: '',
	date: '',
	time: '',
	title: '',
	text: '',
	images: [],
	displayLabel: '',
	subCategory: '',
	comments: [],
	boardAll: [],
};

const communitySlice = createSlice({
	name: 'community',
	initialState,
	reducers: {
		SET_DISPLAY_LABEL(state, action) {
			state.displayLabel = action.payload;
		},
		SET_KIND_PET(state, action) {
			return {
				...state,
				kind: action.payload,
			};
		},
		SET_CATEGORY(state, action) {
			return {
				...state,
				category: action.payload,
			};
		},
		SET_GENDER(state, action) {
			return {
				...state,
				gender: action.payload,
			};
		},
		SET_INPUT_VALUE(state, action) {
			return {
				...state,
				place: action.payload.place,
				date: action.payload.date,
				time: action.payload.time,
				breed: action.payload.breed,
				color: action.payload.color,
				mobile: action.payload.mobile,
				reward: action.payload.reward,
				text: action.payload.text,
				title: action.payload.title,
			};
		},
		SET_IMAGES(state, action) {
			state.images = action.payload;
		},
		SET_SUB_CATEGORY(state, action) {
			state.subCategory = action.payload;
		},
		SET_COMMENT_LIST(state, action) {
			state.comments = action.payload;
		},
		SET_GET_ALL_BOARD(state, action) {
			state.boardAll = action.payload;
		},
	},
});

export const {
	SET_DISPLAY_LABEL,
	SET_KIND_PET,
	SET_CATEGORY,
	SET_GENDER,
	SET_INPUT_VALUE,
	SET_IMAGES,
	SET_SUB_CATEGORY,
	SET_COMMENT_LIST,
	SET_GET_ALL_BOARD,
} = communitySlice.actions;

export default communitySlice.reducer;
