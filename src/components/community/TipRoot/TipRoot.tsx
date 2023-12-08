import { Article, TipLists, TipsNav } from './TipRoot.style';
import TipList from './TipList/TipList';
import Pagination from '../../Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import { useResponsive } from '../../../hooks/useResponsive';

export interface MyTip {
	id: number;
	title: string;
	nickname: string;
	createdAt: string;
	like: number;
}

const getRandomDate = (): string => {
	const start = new Date(2020, 0, 1);
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

const getRandomLikes = (): number => Math.floor(Math.random() * 100);

const createMockTips = (): MyTip[] => {
	const mockData: MyTip[] = [];
	for (let i = 0; i < 240; i++) {
		mockData.push({
			id: i,
			title: `Tip Title ${i}`,
			nickname: `User${i}`,
			createdAt: getRandomDate(),
			like: getRandomLikes(),
		});
	}
	return mockData;
};

const TipRoot = () => {
	const tipList = createMockTips();
	const itemsPerPage = 20;
	const { currentPage, pageRange, handlePageClick, handlePrevNextClick } =
		usePagination(tipList.length, itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentTips = tipList.slice(startIndex, endIndex);

	const { $isMobile } = useResponsive();

	return (
		<Article $isMobile={$isMobile}>
			<TipsNav $isMobile={$isMobile}>
				<div>제목</div>
				<div>글쓴이</div>
				<div>작성날짜</div>
				<div>좋아요</div>
			</TipsNav>
			<TipLists $isMobile={$isMobile}>
				{currentTips.map((list) => (
					<TipList key={list.id} list={list} />
				))}
			</TipLists>
			<Pagination
				currentPage={currentPage}
				pageRange={pageRange}
				onPrevClick={() => handlePrevNextClick('prev')}
				onNextClick={() => handlePrevNextClick('next')}
				onPageClick={handlePageClick}
			/>
		</Article>
	);
};

export default TipRoot;
