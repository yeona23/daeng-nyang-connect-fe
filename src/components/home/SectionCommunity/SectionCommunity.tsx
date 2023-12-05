import Communities from './Communities/Communities';
import {
	CommunityUl,
	MainSection,
	MainSectionH2,
} from './SectionCommunity.style';

const SectionCommunity = () => {
	return (
		<MainSection>
			<MainSectionH2>커뮤니티</MainSectionH2>
			<CommunityUl>
				<Communities title="나의 댕냥이" img="assets/community1.jpg">
					귀여운 반려동물 자랑대회
				</Communities>
				<Communities title="댕냥 꿀팁" img="assets/">
					용품 및 병원 리뷰 꿀팁
				</Communities>
				<Communities title="댕냥 메이트" img="assets/community3.jpg">
					우리 메이트 하자
				</Communities>
				<Communities title="댕냥 미아센터" img="assets/">
					댕냥이가 길을 잃었어요
				</Communities>
			</CommunityUl>
		</MainSection>
	);
};

export default SectionCommunity;
