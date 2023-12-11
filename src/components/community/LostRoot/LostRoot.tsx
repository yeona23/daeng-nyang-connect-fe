import { useResponsive } from '../../../hooks/useResponsive';
import LostList from './LostList/LostList';
import { LostLists } from './LostRoot.style';

export interface LostPet {
	id: number;
	petImage: string;
	place: string;
	lost_date: string;
	lost_time: string;
	lost_minute: string;
	text: string;
}

const getRandomDate = (): string => {
	const start = new Date(2019, 0, 1);
	const end = new Date();
	const randomDate = new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime()),
	);

	return randomDate
		.toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})
		.replace(/\. /g, '.')
		.replace(/\.$/, '');
};

const getRandomTime = (): string => {
	const hour = Math.floor(Math.random() * 24);
	const minute = Math.floor(Math.random() * 60);
	return `${hour.toString().padStart(2, '0')}:${minute
		.toString()
		.padStart(2, '0')}`;
};

const createRandomLostPetList = (): LostPet[] => {
	const lostPetList: LostPet[] = [];
	for (let i = 0; i < 100; i++) {
		const randomTime = getRandomTime();
		lostPetList.push({
			id: i,
			petImage: `pet-${i}.jpg`,
			place: `Place${i}`,
			lost_date: getRandomDate(),
			lost_time: randomTime.split(':')[0],
			lost_minute: randomTime.split(':')[1],
			text: `please find my pet ${i}`,
		});
	}
	return lostPetList;
};

const LostRoot = () => {
	const lostPets = createRandomLostPetList();

	const { $isTablet, $isMobile } = useResponsive();

	return (
		<LostLists $isMobile={$isMobile} $isTablet={$isTablet}>
			{lostPets.map((pet) => (
				<LostList key={pet.id} list={pet} />
			))}
		</LostLists>
	);
};

export default LostRoot;
