import { styled } from 'styled-components';

type Props = {
	img: string;
};

export const CommunityLi = styled.li`
	width: 25%;
	cursor: pointer;
`;

export const CommunityImgDiv = styled.div<Props>`
	width: 240px;
	height: 240px;
	margin: 0 auto 24px;
	border-radius: 50%;
	background: url(${(props) => props.img}) no-repeat
		${(props) => (props.img.includes('2') ? '30%' : null)} center / auto 100%;
	transition: all 0.2s ease-in;
	overflow: hidden;
	&:hover {
		background-size: auto 110%;
	}
`;
export const CommunityTitleDt = styled.dt`
	margin-bottom: 8px;
	font-size: 20px;
	font-weight: 400;
`;
