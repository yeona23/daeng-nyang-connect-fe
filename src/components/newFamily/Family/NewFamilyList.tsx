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
import { PiPawPrintFill } from 'react-icons/pi';

interface Item {
	boardId: number;
	index: number;
	animalName: string;
	age: string;
	adoptionStatus: string;
	images: string[];
	animalId: number;
	createdAt: string;
	kind: string;
	city: string;
}

interface ResponsiveProps {
	$isMobile: boolean;
	$isTablet: boolean;
	$isPc: boolean;
	$isMaxWidth: boolean;
	filterKind: string | null;
	filterCity: string | null;
	filterAdoptionStatus: string | null;
}

const NewFamilyList: React.FC<ResponsiveProps> = ({
	$isMobile,
	$isTablet,
	$isPc,
	$isMaxWidth,
	filterKind,
	filterCity,
	filterAdoptionStatus,
}) => {
	const navigate = useNavigate();
	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

	//전체 데이터 조희
	const { data: items } = useQuery<Item[], unknown, Item[]>(
		['animals'],
		getNewFamily,
	);

	//북마크된 동물정보 불러오기(-> UI에 반영)
	useEffect(() => {
		const fetchScrappedAnimals = async () => {
			try {
				const scrappedAnimalsData = await getScrappedAnimal();

				if (scrappedAnimalsData) {
					const initialState = scrappedAnimalsData.reduce(
						(
							acc: { [key: number]: boolean },
							animal: { animalId?: number },
						) => {
							if (animal.animalId !== undefined) {
								acc[animal.animalId] = true;
							}
							return acc;
						},
						{},
					);
					setBookmarkState(initialState);
					console.log();
				} else {
					console.error('동물데이터가 정의 안 됨');
				}
			} catch (error) {
				console.error('스크랩목록 가져오기 실패:', error);
			}
		};
		fetchScrappedAnimals();
	}, []);

	//북마크 추가
	const clickBookmarkHandler = async (animalId: number) => {
		try {
			if (Object.prototype.hasOwnProperty.call(bookmarkState, animalId)) {
				const updatedBookmarkState = { ...bookmarkState };
				delete updatedBookmarkState[animalId];
				setBookmarkState(updatedBookmarkState);

				console.log('After Deletion:', updatedBookmarkState);

				await scrapAnimal(animalId);
			} else {
				const updatedBookmarkState = { ...bookmarkState, [animalId]: true };
				setBookmarkState(updatedBookmarkState);
				await scrapAnimal(animalId)
					.then((result) => {
						console.log('Scrap Success:', result);
					})
					.catch((error) => {
						console.error('Scrap Error:', error);
					});
			}
		} catch (error) {
			console.error('북마크오류', error);
			setBookmarkState((prev) => ({ ...prev, [animalId]: !prev[animalId] }));
		}
	};

	//북마크컬러변경
	const getBookmarkColor = (animalId: number) => {
		return bookmarkState[animalId] ? 'var(--color-light-salmon)' : '#ffffff70';
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
		if ($isMobile) return 20;
		return 30;
	};

	return (
		<ItemList
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			{items
				?.filter((animal) => {
					if (filterKind && animal.kind !== filterKind) return false;
					if (filterCity && animal.city !== filterCity) return false;
					if (
						filterAdoptionStatus &&
						animal.adoptionStatus !== filterAdoptionStatus
					)
						return false;
					return true;
				})
				?.sort((a, b) => b.boardId - a.boardId)
				.map((animal: Item) => (
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
								<div className="adoption-status-icon">
									<PiPawPrintFill
										size={getAdoptionStatusSize()}
										color="var(--color-light-salmon)"
									/>
								</div>
							)}
							<BsBookmarkFill
								color={getBookmarkColor(animal.boardId)}
								size={getBookmarkSize()}
								onClick={(e) => {
									e.stopPropagation();
									clickBookmarkHandler(animal.boardId);
								}}
								className="bookmark-icon"
							/>
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
