import { MainSection, MainSectionH2 } from './../Section.style';
import HorizentalCard from '../UI/HorizentalCard/HorizentalCard';
import { SalmonBtn } from '../UI/SalmonBtn/SalmonBtn.style';
import { CardListUl } from './SectionReview.style';

const SectionReview = () => {
	return (
		<MainSection>
			<MainSectionH2>입양 후기</MainSectionH2>
			<CardListUl>
				<HorizentalCard />
			</CardListUl>
			<SalmonBtn padding="15px 100px">더보기</SalmonBtn>
		</MainSection>
	);
};

export default SectionReview;
