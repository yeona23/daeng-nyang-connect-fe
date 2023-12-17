import NewFamily from '../pages/NewFamily/NewFamily';
import APIClient from './ApiClient';

const POST = '/post';
const MODIFY = '/modify';
const SCRAP = '/scrap';
const COMPLETE = '/complete';
const KIND = '/kind';
const CITY = 'city';
const ADOPTION_STATUS = '/adoptionStatus';
const GET_ALL = '/getAll';
const DELETE = '/delete';
const BASE_URL = 'http://3.35.16.126:8080';

const animalMockApi = new APIClient('/data');

export const getAnimalsMock = async (): Promise<any> => {
	return await animalMockApi.get('animals.json');
};

export const animalApi = new APIClient(BASE_URL + '/api/animal');

export const getAnimal = async (): Promise<any> => {
	return await animalApi.get(GET_ALL);
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

export const registerAnimal = async (data: RegisterAnimal) => {
	const { files } = data;
	const formData = new FormData();

	Object.keys(data).forEach((key) => {
		if (key !== 'files') {
			const value = data[key as keyof RegisterAnimal];
			if (value !== undefined) {
				formData.append(key, value.toString());
			}
		}
	});

	if (files && files.length > 0) {
		for (const file of files) {
			console.log(file);
			formData.append('files', file);
		}
	}

	try {
		const response = await animalApi.post(POST, formData);
		console.log('Server Response:', response);
		return response;
	} catch (error) {
		console.error('Error during registration:', error);
		throw error; // Optional: Rethrow the error for the caller to handle
	}
};

export const modifyAnimal = async (boardId: number) => {
	return await animalApi.put(MODIFY + `/${boardId}`, {});
};

export const deleteAnimal = async (boardId: number) => {
	return await animalApi.delete(DELETE + `/${boardId}`);
};

export const scrapAnimal = async (boardId: number) => {
	return await animalApi.post(SCRAP + `/${boardId}`, {});
};

export const completeAnimal = async (boardId: number) => {
	return await animalApi.put(COMPLETE + `/${boardId}`, {});
};

export const kindAnimal = async (kind: string) => {
	return await animalApi.get(KIND + `/${kind}`);
};

export const cityAnimal = async (city: string) => {
	return await animalApi.get(CITY + `/${city}`);
};

export const adoptionStatusAnimal = async (adoptionStatus: string) => {
	return await animalApi.get(ADOPTION_STATUS + `/${adoptionStatus}`);
};
