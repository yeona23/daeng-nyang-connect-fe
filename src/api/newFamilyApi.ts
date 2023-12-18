import APIClient from './ApiClient';

const POST = '/post';
const COMPLETE = '/complete';
const GET_ALL = '/getAll';
const BASE_URL = 'http://3.35.16.126:8080';

export const NewFamilyApi = new APIClient(BASE_URL + '/api/animal');

export const getNewFamily = async (): Promise<any> => {
	return await NewFamilyApi.get(GET_ALL);
};

export const adoptComplete = async (animalId: number, adoptUserId: number) => {
	return await NewFamilyApi.put(
		COMPLETE + `?animalId=${animalId}&&adoptedUserId=${adoptUserId}`,
	);
};
interface RegisterAnimal {
	animalName: string;
	kind: string;
	city: string;
	gender: string;
	breed: string;
	age: string;
	disease: string;
	training: string;
	neutering: string;
	healthCheck: string;
	nurturePeriod: string;
	files: File[];
	textReason: string;
	textEtc: string;
}

export const registerAnimal = async (data: RegisterAnimal): Promise<any> => {
	const formData = new FormData();

	for (const key in data) {
		if (key !== 'files') formData.append(key, (data as any)[key] as string);
	}

	if (data.files) {
		data.files.forEach((file) => {
			formData.append(`files`, file);
		});
	}

	return await NewFamilyApi.post(POST, formData);
};
