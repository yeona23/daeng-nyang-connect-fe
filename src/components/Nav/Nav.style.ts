import styled from 'styled-components';

export const HeaderDiv = styled.div`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	background-color: rgba(255, 255, 255, 0.8);
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
	transition: all 0.4s ease;
	cursor: pointer;
	&:hover {
		color: var(--color-light-salmon);
	}
`;
export const UtilDl = styled.dl`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const UtilDd = styled.dd`
	margin-left: 4px;
	width: 24px;
	height: 24px;
	cursor: pointer;
	svg {
		width: 100%;
		height: 100%;
		stroke-width: 1.6;
	}
`;
