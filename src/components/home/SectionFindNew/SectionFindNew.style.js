import styled from 'styled-components';
import { MainSection } from './../SectionCommunity/SectionCommunity.style';

export const MainContentsDiv = styled(MainSection)`
	position: relative;
	text-align: left;
`;
export const CardListUl = styled.ul`
	display: flex;
	justify-content: space-between;
`;
export const MoreBtn = styled.button`
	position: absolute;
	top: 80px;
	right: 0;
	padding: 10px 30px;
	border-radius: 8px;
	background-color: var(--color-light-salmon);
	color: #fff;
`;
