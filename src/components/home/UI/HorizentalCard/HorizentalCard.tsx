import { CardBtn } from '../VerticalCard.style';
import {
	HorizentalCardImgDiv,
	HorizentalCardLi,
	HorizentalCardTextBox,
	HorizentalCardTextDiv,
} from './HorizentalCard.style';

type HorizentalCardProps = {
	$isMobile?: boolean;
};

const HorizentalCard = ({ $isMobile }: HorizentalCardProps) => {
	return (
		<HorizentalCardLi $isMobile={$isMobile}>
			<HorizentalCardImgDiv />
			<HorizentalCardTextDiv>
				<HorizentalCardTextBox>
					<p>이름 : 똘이</p>
					<p>
						asdfLorem Ipsum has been the standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled
						it to make a type specimen book. It has survived not only five
						centuries, but also the leap into electronic typesetting, remaining
						essentially unchanged. an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</p>
				</HorizentalCardTextBox>
				<CardBtn>자세히 보기</CardBtn>
			</HorizentalCardTextDiv>
		</HorizentalCardLi>
	);
};

export default HorizentalCard;
