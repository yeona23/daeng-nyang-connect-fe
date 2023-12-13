import APIClient from './ApiClient';

const REGISTER = '/post';
const MODIFY = '/modify';
const LIKE = '/like';
const GET_ALL = '/getAll';
const DELETE = '/delete';
const BASE_URL = 'http://3.35.16.126:8080';

// const reviewMockApi = new APIClient('/data');

// export const getProductsMock = async () => {
// 	return await reviewMockApi.get('review.json');
// };

export const reviewApi = new APIClient(BASE_URL + '/api/review');

export const getReview = async () => {
	return await reviewApi.get<any[]>(GET_ALL);
};

interface RegisterReviewBody {
	adoptedAnimalName: string;
	age: string;
	image: string; //여기 질문하기
	textReview: string;
	createdAt: string;
}

export const registerReview = async (
	body: RegisterReviewBody,
	animalId: number,
) => {
	return await reviewApi.post(REGISTER + `?id=${animalId}`, {
		adoptedAnimalName: body.adoptedAnimalName,
		age: body.age,
		image: body.image,
		textReview: body.textReview,
		createdAt: body.createdAt,
	});
};

export const deleteReview = async (reviewId: number) => {
	return await reviewApi.delete(DELETE + `/${reviewId}`);
};
