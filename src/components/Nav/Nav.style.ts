import styled, { css } from 'styled-components';

interface NavProps {
	isHome?: string;
}

export const HeaderDiv = styled.div<NavProps>`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	background-color: #fff;
	box-shadow: 0 0 10px 0 #9e848d50;
	transition: all 0.3s ease-in-out;
	${(props) =>
		props.isHome &&
		css`
			background-color: rgba(255, 255, 255, 0.8);
		`}
`;
export const HeaderContenstDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	max-width: 1320px;
	height: 100%;
`;
export const HeaderNav = styled.nav`
	display: flex;
	align-items: center;
`;
export const LogoH1 = styled.h1`
	margin-right: 26px;
	cursor: pointer;
`;
export const NavUl = styled.ul`
	display: flex;
`;
export const NavLi = styled.li`
	margin-right: 20px;
	font-size: 18px;
	transition: all 0.4s ease;
	cursor: pointer;
	&:hover {
		color: var(--color-light-salmon);
	}
	.nav {
		font-weight: 400;
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
