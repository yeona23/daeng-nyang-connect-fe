import { MainSectionH2 } from '../SectionCommunity/SectionCommunity.style';
import { CardListUl, MainContentsDiv, MoreBtn } from './SectionFindNew.style';
import VerticalCard from './../UI/VerticalCard';

const SectionFindNew = () => {
	return (
		<section style={{ backgroundColor: '#ffe1d6', position: 'relative' }}>
			<MainContentsDiv as="div">
				<MainSectionH2>새로운 가족 찾기</MainSectionH2>
				<CardListUl>
					<VerticalCard></VerticalCard>
					<VerticalCard></VerticalCard>
					<VerticalCard></VerticalCard>
					<VerticalCard></VerticalCard>
				</CardListUl>
				<MoreBtn>더보기</MoreBtn>
			</MainContentsDiv>
		</section>
	);
};

export default SectionFindNew;
