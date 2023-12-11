import { createSlice } from '@reduxjs/toolkit';

export interface CommunityState {
	category: string;
	place: string;
	reward: number;
	mobile: string;
	kind: string;
	breed: string;
	gender: string;
	color: string;
	lost_date: string;
	lost_time: string;
	lost_minute: string;
	title: string;
	text: string;
	images: Array<string>;
	displayLabel: string;
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
	lost_date: '',
	lost_time: '',
	lost_minute: '',
	title: '',
	text: '',
	images: [],
	displayLabel: '',
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
			const { lost_time } = action.payload;
			const [time, minute] = lost_time.split(':');

			return {
				...state,
				place: action.payload.place,
				lost_date: action.payload.lost_date,
				lost_time: time,
				lost_minute: minute,
				breed: action.payload.breed,
				color: action.payload.color,
				mobile: action.payload.mobile,
				reward: action.payload.reward,
				text: action.payload.text,
				title: action.payload.title,
			};
		},
	},
});

export const {
	SET_DISPLAY_LABEL,
	SET_KIND_PET,
	SET_CATEGORY,
	SET_GENDER,
	SET_INPUT_VALUE,
} = communitySlice.actions;

export default communitySlice.reducer;
