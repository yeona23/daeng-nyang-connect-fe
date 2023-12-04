import { useEffect, useState } from 'react';
import { Article, TipLists, TipsNav } from './TipRoot.style';
import TipList from './TipList/TipList';
import Pagination from '../../Pagination/Pagination';

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
	const [tipList, setTipList] = useState<MyTip[]>(createMockTips());
	const [currentPage, setCurrentPage] = useState(1);
	const [pageRange, setPageRange] = useState([1, 2, 3, 4, 5]);
	const itemsPerPage = 20;
	const totalPages = Math.ceil(tipList.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentTips = tipList.slice(startIndex, endIndex);

	useEffect(() => {
		const endPage = Math.min(5, totalPages);
		setPageRange(Array.from({ length: endPage }, (_, i) => i + 1));
	}, [tipList, totalPages]);

	const handlePageClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handlePrevNextClick = (direction: 'prev' | 'next') => {
		if (direction === 'next') {
			setCurrentPage(currentPage + 1);
			if (pageRange[4] < totalPages) {
				const newRange = pageRange.map((page) => page + 5);
				setPageRange(newRange);
				setCurrentPage(newRange[0]);
			}
		} else if (direction === 'prev') {
			setCurrentPage(currentPage - 1);
			if (pageRange[0] > 1) {
				const newRange = pageRange.map((page) => page - 5);
				setPageRange(newRange);
				setCurrentPage(newRange[0]);
			}
		}
	};

	return (
		<Article>
			<TipsNav>
				<div>제목</div>
				<div>글쓴이</div>
				<div>작성날짜</div>
				<div>좋아요</div>
			</TipsNav>
			<TipLists>
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
