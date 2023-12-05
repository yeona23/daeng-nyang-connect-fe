import {
	CommunityImg,
	CommunityImgDiv,
	CommunityLi,
	CommunityTitleDt,
} from './Communities.style';

interface CommunityProps {
	img: string;
	title: string;
	children: string;
}

const Communities = ({ title, img, children }: CommunityProps) => {
	return (
		<CommunityLi>
			<CommunityImgDiv>
				<CommunityImg src={img} alt="" />
			</CommunityImgDiv>
			<dl>
				<CommunityTitleDt>{title}</CommunityTitleDt>
				<dd>{children}</dd>
			</dl>
		</CommunityLi>
	);
};

export default Communities;
