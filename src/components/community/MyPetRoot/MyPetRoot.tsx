import { useState } from 'react';
import MyPetList from './MyPetList/MyPetList';
import { MyPetLists } from './MyPetRoot.style';

export interface MyPet {
	id: number;
	userThumbnail: string;
	userName: string;
	petImage: string;
}

const MyPetRoot = () => {
	const createMockMyPets = (): MyPet[] => {
		const mockData: MyPet[] = [];

		for (let i = 0; i < 20; i++) {
			mockData.push({
				id: i,
				userThumbnail: `userThumbnail-${i}`,
				userName: `userName-${i}`,
				petImage: `petImage-${i}`,
			});
		}

		return mockData;
	};

	const [myPetList, setMyPetList] = useState<MyPet[]>(createMockMyPets());

	return (
		<MyPetLists>
			{myPetList.map((list) => (
				<MyPetList key={list.id} list={list} />
			))}
		</MyPetLists>
	);
};

export default MyPetRoot;
