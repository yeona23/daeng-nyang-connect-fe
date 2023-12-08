import styled, { css } from 'styled-components';

interface BtnProps {
	padding: string;
	$isMobile?: boolean;
}

export const SalmonBtn = styled.button<BtnProps>`
	padding: ${(props) => props.padding};
	border-radius: 8px;
	background-color: var(--color-light-salmon);
	color: #fff;
	font-size: ${(props) => (props.$isMobile ? '14px' : '18px')};
	cursor: pointer;
`;
