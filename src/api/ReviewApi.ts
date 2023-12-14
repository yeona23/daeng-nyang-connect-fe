import APIClient from './ApiClient';

const REGISTER = '/post';
const MODIFY = '/modify';
const LIKE = '/like';
const GET_ALL = '/getAll';
const DELETE = '/delete';
const COMMENT = '/comments/post';
const COMMENT_DELETE = 'comments/delete';

const BASE_URL = 'http://3.35.16.126:8080';

// const reviewMockApi = new APIClient('/data');

// export const getProductsMock = async () => {
// 	return await reviewMockApi.get('review.json');
// };

export const reviewApi = new APIClient(BASE_URL + '/api/review');

export const getReview = async () => {
	return await reviewApi.get(GET_ALL);
};

interface RegisterReview {
	adoptedAnimalName: string;
	age: string;
	images: string; //여기 질문하기
	textReview: string;
	createdAt: string;
}

export const registerReview = async (
	body: RegisterReview,
	reviewId: number,
) => {
	return await reviewApi.post(REGISTER + `?id=${reviewId}`, {
		adoptedAnimalName: body.adoptedAnimalName,
		age: body.age,
		images: body.images,
		textReview: body.textReview,
		createdAt: body.createdAt,
	});
};

export const deleteReview = async (reviewId: number) => {
	return await reviewApi.delete(DELETE + `/${reviewId}`);
};

export const modifyReview = async (reviewId: number) => {
	return await reviewApi.put(MODIFY + `/${reviewId}`, {});
};

export const likeReview = async (reviewId: number) => {
	return await reviewApi.post(LIKE + `/${reviewId}`, {});
};

export const postComment = async (reviewId: number) => {
	return await reviewApi.post(COMMENT + `/${reviewId}`, {});
};

export const deleteComment = async (reviewCommentsId: number) => {
	return await reviewApi.delete(COMMENT_DELETE + `${reviewCommentsId}`);
};
