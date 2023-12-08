import { useState } from 'react';
import MyPetList from './MyPetList/MyPetList';
import { MyPetLists } from './MyPetRoot.style';
import { useResponsive } from '../../../hooks/useResponsive';

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
	const { $isTablet, $isMobile } = useResponsive();

	return (
		<MyPetLists $isTablet={$isTablet} $isMobile={$isMobile}>
			{myPetList.map((list) => (
				<MyPetList key={list.id} list={list} />
			))}
		</MyPetLists>
	);
};

export default MyPetRoot;
