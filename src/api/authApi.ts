import APIClient from './ApiClient';

const SIGNUP = '/signup';
const LOGIN = '/login';
const BASE_URL = 'http://3.35.16.126:8080';

interface SignupRequestBody {
	email: string;
	password: string;
	name: string;
	nickname: string;
	mobile: string;
	city: string;
	town: string;
	experience: boolean;
	gender: string;
}

interface LoginRequestBody {
	email: string;
	password: string;
}

export const authApi = new APIClient(BASE_URL + '/api');

export const signupUser = async (body: SignupRequestBody): Promise<any> => {
	return await authApi.post(SIGNUP, {
		email: body.email,
		password: body.password,
		name: body.name,
		nickName: body.nickname,
		mobile: body.mobile,
		city: body.city,
		town: body.town,
		experience: body.experience,
		gender: body.gender,
	});
};

export const loginUser = async (body: LoginRequestBody): Promise<any> => {
	return await authApi.post(LOGIN, {
		email: body.email,
		password: body.password,
	});
};
