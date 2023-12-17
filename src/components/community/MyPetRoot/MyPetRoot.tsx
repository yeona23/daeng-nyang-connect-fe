import MyPetList from './MyPetList/MyPetList';
import { MyPetLists } from './MyPetRoot.style';
import { useResponsive } from '../../../hooks/useResponsive';
import { getAllBoard } from '../../../api/communityApi';
import { useQuery } from 'react-query';
import { Board } from '../../../types/BoardTypes';

const MyPetRoot = () => {
	const { $isTablet, $isMobile } = useResponsive();

	const fetchGetAllMyPetBoard = async (): Promise<Board[]> => {
		const response = await getAllBoard('my_pet');

		return response;
	};

	const { data, isLoading } = useQuery<Board[]>(
		'myPetAllBoard',
		fetchGetAllMyPetBoard,
	);

	return (
		<>
			{isLoading && <section>로딩 중...</section>}
			<MyPetLists $isTablet={$isTablet} $isMobile={$isMobile}>
				{data &&
					data.map((list) => {
						if ('boardId' in list) {
							return <MyPetList key={list.boardId} list={list} />;
						}
					})}
			</MyPetLists>
		</>
	);
};

export default MyPetRoot;
