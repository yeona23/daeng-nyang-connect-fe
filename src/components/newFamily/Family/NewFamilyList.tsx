/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBox, ItemList } from '../NewFamily.style';
import { useDispatch } from 'react-redux';
import { SET_ANIMALS } from '../../../slice/newFamilySlice';
import { useQuery } from 'react-query';
import { getNewFamily, scrapAnimal } from '../../../api/newFamilyApi';
import { BsBookmarkFill } from 'react-icons/bs';
import { PiPawPrintFill, PiPawPrintBold } from 'react-icons/pi';

interface Item {
	boardId: number;
	index: number;
	animalName: string;
	age: string;
	adoptionStatus: string;
	images: string[];
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

	const [bookmarkState, setBookmarkState] = useState<{
		[key: number]: boolean;
	}>({});

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

	const goToDetailPage = (petId: number) => {
		navigate(`/newFamily/pet/${petId}`);
	};

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
