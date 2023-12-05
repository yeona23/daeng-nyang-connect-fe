import {
	MainSection,
	MainSectionH2,
} from '../SectionCommunity/SectionCommunity.style';

const SectionFindNew = () => {
	return (
		<section style={{ backgroundColor: '#ffe1d6' }}>
			<MainSection as="div" className="new">
				<MainSectionH2>새로운 가족 찾기</MainSectionH2>
			</MainSection>
		</section>
	);
};

export default SectionFindNew;
