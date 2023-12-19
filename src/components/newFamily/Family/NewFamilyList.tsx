/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBox, ItemList } from '../NewFamily.style';
import { useQuery } from 'react-query';
import {
	getNewFamily,
	getScrappedAnimal,
	scrapAnimal,
} from '../../../api/newFamilyApi';
import { BsBookmarkFill } from 'react-icons/bs';
import { PiPawPrintFill, PiPawPrintBold } from 'react-icons/pi';

interface Item {
	boardId: number;
	index: number;
	animalName: string;
	age: string;
	adoptionStatus: string;
	images: string[];
	animalId: number;
}

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
}

const NewFamilyList: React.FC<ResponsiveProps> = ({
	$isMobile,
	$isTablet,
	$isPc,
	$isMaxWidth,
}) => {
	const navigate = useNavigate();
	const { data: items } = useQuery<Item[], unknown, Item[]>(
		['animals'],
		getNewFamily,
	);

	const { data: scrappedAnimals } = useQuery<Item[], unknown, Item[]>(
		['scrappedAnimals'],
		getScrappedAnimal,
	);

	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	//북마크된 동물정보 불러오기(-> UI에 반영)
	useEffect(() => {
		const fetchScrappedAnimals = async () => {
			try {
				const scrappedAnimalsData = await getScrappedAnimal();
				const initialState = scrappedAnimalsData.reduce(
					(acc: { [key: number]: boolean }, animal: { animalId?: number }) => {
						if (animal.animalId !== undefined) {
							acc[animal.animalId] = true;
						}

						return acc;
					},
					{},
				);
				console.log('Initial State:', initialState);
				setBookmarkState(initialState);
			} catch (error) {
				console.error('스크랩목록 가져오기 실패:', error);
			}
		};
		fetchScrappedAnimals();
	}, []);

	//북마크 추가
	const clickBookmarkHandler = async (animalId: number) => {
		try {
			const updatedBookmarkState = {
				...bookmarkState,
				[animalId]: !bookmarkState[animalId],
			};
			setBookmarkState(updatedBookmarkState);
			await scrapAnimal(animalId);
		} catch (error) {
			console.error('북마크오류', error);
			setBookmarkState((prev) => ({ ...prev, [animalId]: !prev[animalId] }));
		}
	};

	//디테일 페이지 이동
	const goToDetailPage = (petId: number) => {
		navigate(`/newFamily/pet/${petId}`);
	};

	//디바이스에 따른 아이콘 사이즈 조정
	const getBookmarkSize = () => {
		if ($isMobile) return 25;
		return 30;
	};

	const getAdoptionStatusSize = () => {
		if ($isMobile) return 28;
		return 40;
	};

	return (
		<ItemList
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			{items?.map((animal: Item) => (
				<ItemBox
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
					key={animal.boardId}
					onClick={() => goToDetailPage(animal.boardId)}>
					<div>
						<img src={animal.images[0]} alt={`adoption${animal.boardId}`} />
						{animal.adoptionStatus === 'COMPLETED' && (
							<PiPawPrintFill
								size={getAdoptionStatusSize()}
								color="var(--color-light-salmon)"
								className="adoption-status-icon"
							/>
						)}
						{(scrappedAnimals ?? []).some(
							(scrappedAnimal) => scrappedAnimal.animalId === animal.boardId,
						) && (
							<BsBookmarkFill
								color={
									bookmarkState[animal.boardId]
										? 'var(--color-light-salmon)'
										: '#ffffff70'
								}
								size={getBookmarkSize()}
								onClick={(e) => {
									e.stopPropagation();
									clickBookmarkHandler(animal.boardId);
								}}
							/>
						)}
					</div>
					<div>
						<p>이름 : {animal.animalName}</p>
						<p>나이 : {animal.age}개월</p>
						<button onClick={() => goToDetailPage(animal.boardId)}>
							자세히 보기
						</button>
					</div>
				</ItemBox>
			))}
		</ItemList>
	);
};

export default NewFamilyList;
