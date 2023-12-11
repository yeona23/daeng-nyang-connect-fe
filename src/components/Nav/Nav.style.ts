import styled, { css } from 'styled-components';

type NavProps = {
	isHome?: string;
	$isMaxWidth?: boolean;
	$isMobile?: boolean;
};

export const HeaderDiv = styled.div<NavProps>`
	position: ${(props) => (props.$isMobile ? 'static' : 'fixed')};
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	height: ${(props) => (props.$isMobile ? '50px' : '64px')};
	background-color: #fff;
	box-shadow: 0 0 10px 0 #9e848d50;
	transition: all 0.3s ease-in-out;
	${(props) =>
		props.isHome &&
		!props.$isMobile &&
		css`
			background-color: rgba(255, 255, 255, 0.8);
		`}
`;
export const HeaderContenstDiv = styled.div<NavProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1320px;
	width: 100%;
	height: 100%;
	margin: auto;
	padding: ${(props) => (props.$isMaxWidth ? '0 30px' : null)};
`;
export const HeaderNav = styled.nav`
	display: flex;
	align-items: center;
`;
export const LogoH1 = styled.h1<NavProps>`
	width: ${(props) => (props.$isMobile ? '70%' : null)};
	margin-right: 26px;
	cursor: pointer;
	img {
		width: 100%;
	}
`;
const MobileUl = css`
	position: absolute;
	z-index: 999;
	top: 50px;
	left: 0;
	justify-content: center;
	width: 100%;
	height: 45px;
	background-color: var(--color-light-salmon);
	padding: 0 30px;
`;
export const NavUl = styled.ul<NavProps>`
	${(props) => (props.$isMobile ? MobileUl : null)}
	display: flex;
	align-items: center;
`;
export const NavLi = styled.li`
	margin-right: 20px;
	font-size: 18px;
	cursor: pointer;
	.nav {
		font-weight: 400;
		transition: all 0.4s ease;
		&:hover {
			color: var(--color-light-salmon);
		}
	}
	.m-nav {
		font-size: 16px;
		font-weight: 400;
		color: #fff;
		transition: all 0.4s ease;
		&:hover {
			color: var(--color-deep-blue);
		}
	}
`;
export const UtilDl = styled.dl`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const UtilDd = styled.dd`
	margin-left: 4px;
	width: 28px;
	height: 28px;
	cursor: pointer;
	svg {
		width: 100%;
		height: 100%;
		stroke-width: 1.6;
	}
`;
