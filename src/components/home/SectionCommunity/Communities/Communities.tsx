import {
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
			<CommunityImgDiv img={img}></CommunityImgDiv>
			<dl>
				<CommunityTitleDt>{title}</CommunityTitleDt>
				<dd>{children}</dd>
			</dl>
		</CommunityLi>
	);
};

export default Communities;
