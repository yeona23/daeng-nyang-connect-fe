import { Article, TipLists, TipsNav } from './TipRoot.style';
import TipList from './TipList/TipList';
import Pagination from '../../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useResponsive } from '../../../hooks/useResponsive';
import { getAllBoard } from '../../../api/communityApi';
import { useQuery } from 'react-query';
import { Board } from '../../../types/BoardTypes';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CommunityState } from '../../../slice/communitySlice';

export interface MyTip {
	id: number;
	title: string;
	nickname: string;
	createdAt: string;
	like: number;
}
interface RootState {
	community: CommunityState;
}

const TipRoot = () => {
	const { $isMobile } = useResponsive();

	const category = useSelector(
		(state: RootState) => state.community.subCategory,
	);

	const [filteredData, setFilteredData] = useState<Board[]>([]);

	const fetchGetAllTipBoard = async (): Promise<Board[]> => {
		const response = await getAllBoard('tips', String(currentPage));

		return response;
	};

	const { data, isLoading } = useQuery<Board[]>(
		'tipAllBoard',
		fetchGetAllTipBoard,
	);

	const itemsPerPage = 20;
	const { currentPage, pageRange, handlePageClick, handlePrevNextClick } =
		usePagination(data && data.length, itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentTips = data && data.slice(startIndex, endIndex);

	useEffect(() => {
		if (Array.isArray(data)) {
			const filteredData = (data as Board[])?.filter((item) => {
				if (category === null) {
					return item;
				} else {
					return item.category === category;
				}
			});
			setFilteredData(filteredData);
		}
	}, [data, category]);

	return (
		<>
			{isLoading && <section>로딩 중..</section>}
			<Article $isMobile={$isMobile}>
				<TipsNav $isMobile={$isMobile}>
					<div>제목</div>
					<div>글쓴이</div>
					<div>작성날짜</div>
					<div>좋아요</div>
				</TipsNav>
				<TipLists $isMobile={$isMobile}>
					{category === ''
						? data?.map(
								(list) =>
									'boardId' in list && (
										<TipList key={list.boardId} list={list} />
									),
						  )
						: filteredData?.map(
								(list) =>
									'boardId' in list && (
										<TipList key={list.boardId} list={list} />
									),
						  )}
				</TipLists>
				<Pagination
					currentPage={currentPage}
					pageRange={pageRange}
					onPrevClick={() => handlePrevNextClick('prev')}
					onNextClick={() => handlePrevNextClick('next')}
					onPageClick={handlePageClick}
				/>
			</Article>
		</>
	);
};

export default TipRoot;
