import APIClient from './ApiClient';

const REGISTER = '/post';
const MODIFY = '/modify';
const SCRAP = '/scrap';
const COMPLETE = '/complete';
const KIND = '/kind';
const CITY = 'city';
const ADOPTION_STATUS = '/adoptionStatus';
const GET_ALL = '/getAll';
const DELETE = '/delete';
const BASE_URL = 'http://3.35.16.126:8080';

export const animalApi = new APIClient(BASE_URL + '/api/animal');

export const getAnimal = async () => {
	return await animalApi.get(GET_ALL);
};

interface RegisterAnimal {
	animalName: string;
	kind: string;
	region: string;
	gender: boolean;
	breed: string;
	age: string;
	disease: string;
	training: boolean;
	neutering: boolean;
	healthCheck: boolean;
	nurturePeriod: string;
	image: string;
	textReason: string;
	textEtc: string;
	adoptionStatus: string;
	createAt: string;
}

export const registerAnimal = async (
	body: RegisterAnimal,
	animalId: number,
) => {
	return await animalApi.post(REGISTER + `?id=${animalId}`, {
		animalName: body.animalName,
		kind: body.kind,
		region: body.region,
		gender: body.gender.toString(),
		breed: body.breed,
		age: body.age,
		disease: body.disease,
		training: body.training.toString(),
		neutering: body.neutering.toString(),
		healthCheck: body.healthCheck.toString(),
		nurturePeriod: body.nurturePeriod,
		image: body.image,
		textReason: body.textReason,
		textEtc: body.textEtc,
		adoptionStatus: body.adoptionStatus,
		createAt: body.createAt,
	});
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
