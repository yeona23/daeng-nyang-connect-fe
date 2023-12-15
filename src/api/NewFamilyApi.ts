import APIClient from './ApiClient';

const REGISTER = '/post';
const MODIFY = '/modify';
const SCRAP = '/scrap';
const COMPLETE = '/complete';
const KIND = '/kind';
const CITY = 'city';
const ADOPTION_STATUS = '/adoptionStatus';
const GET_ALL = '/all';
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

interface RegisterAnimal extends Record<string, string | boolean> {
	animalName: string;
	kind: string;
	region: string;
	gender: string;
	breed: string;
	age: string;
	disease: string;
	training: string;
	neutering: boolean;
	healthCheck: string;
	nurturePeriod: string;
	image: string;
	textReason: string;
	textEtc: string;
	adoptionStatus: string;
	createAt: string;
}

export const registerAnimal = async (data: RegisterAnimal) => {
	return await animalApi.post(REGISTER, data);
};

export const modifyAnimal = async (animalId: number) => {
	return await animalApi.put(MODIFY + `/${animalId}`, {});
};

export const deleteAnimal = async (animalId: number) => {
	return await animalApi.delete(DELETE + `/${animalId}`);
};

export const scrapAnimal = async (animalId: number) => {
	return await animalApi.post(SCRAP + `/${animalId}`, {});
};

export const completeAnimal = async (animalId: number) => {
	return await animalApi.put(COMPLETE + `/${animalId}`, {});
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
