import styled from 'styled-components';

interface NavOptionProps {
	$isTablet?: boolean;
	$isMobile?: boolean;
}

export const LostLi = styled.li`
	width: 100%;
	height: auto;
	border: 1px solid var(--color-peach);
	border-radius: 8px;
	cursor: pointer;
`;

export const ImgWrap = styled.div<NavOptionProps>`
	border-radius: 8px 8px 0px 0px;
	overflow: hidden;

	& img {
		width: 100%;
		height: auto;
		border-radius: 8px 8px 0px 0px;
		transition: transform 0.7s ease;
	}

	& img:hover {
		transform: scale(1.05);
	}
`;

export const TextWrap = styled.div<NavOptionProps>`
	height: 180px;
	padding: 16px;
	font-size: ${(props) =>
		props.$isTablet ? '15px' : props.$isMobile ? '12px' : '16px'};
	line-height: 1.3;

	& div {
		margin-bottom: ${(props) =>
			props.$isTablet ? '12px' : props.$isMobile ? '8px' : '16px'};
	}

	& p {
		height: 50%;
		margin-top: ${(props) =>
			props.$isTablet ? '12px' : props.$isMobile ? '8px' : '16px'};
	}
`;

export const ButtonWrap = styled.div`
	text-align: right;
	margin: 0px 10px 10px 0px;

	& button:hover {
		background-color: var(--color-light-salmon);
		color: var(--color-peach);
	}
`;

export const Button = styled.button<NavOptionProps>`
	padding: ${(props) =>
		props.$isTablet ? '4px 16px' : props.$isMobile ? '4px 8px' : '4px 16px'};
	border: 1px solid var(--color-light-salmon);
	border-radius: 4px;
	outline: none;
	background-color: transparent;
	font-size: ${(props) =>
		props.$isTablet ? '15px' : props.$isMobile ? '12px' : '16px'};
	cursor: pointer;
`;
