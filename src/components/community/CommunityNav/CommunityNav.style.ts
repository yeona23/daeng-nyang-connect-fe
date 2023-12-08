import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
interface NavOptionProps {
	$isActive?: boolean;
	$isTablet?: boolean;
	$isMobile?: boolean;
}

export const TitleAndSearchWrap = styled.div<NavOptionProps>`
	display: flex;
	flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
	align-items: center;
	justify-content: space-between;
	padding-left: ${(props) => (props.$isMobile ? '4px' : '20px')};
	border-bottom: 1px solid var(--color-light-salmon);
`;

export const TitleWrap = styled.div<NavOptionProps>`
	margin-top: 10px;
	margin-bottom: ${(props) => (props.$isMobile ? '10px' : '0px')};

	& span {
		margin-right: 10px;
		font-size: ${(props) => (props.$isMobile ? '12px' : '16px')};
	}

	& span:nth-child(3) {
		font-size: ${(props) =>
			props.$isTablet ? '20px' : props.$isMobile ? '16px' : '24px'};
	}
`;

export const SearchWrap = styled.div<NavOptionProps>`
	display: flex;
	justify-content: space-between;
	width: ${(props) =>
		props.$isTablet ? '450px' : props.$isMobile ? '340px' : '500px'};
	padding: 10px;
	margin-bottom: 10px;
	border: 0.5px solid var(--color-light-salmon);
	border-radius: 20px;

	& input {
		width: 70%;
		border: transparent;
		outline: none;
		font-size: ${(props) => (props.$isMobile ? '12px' : '16px')};
	}
`;

export const StyledIoIosSearch = styled(IoIosSearch)`
	cursor: pointer;
`;

export const Article = styled.article<NavOptionProps>`
	display: flex;
	flex-direction: ${(props) => (props.$isMobile ? 'column' : 'row')};
`;

export const Nav = styled.nav<NavOptionProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${(props) => (props.$isMobile ? '100%' : '15%')};
	min-height: ${(props) => (props.$isMobile ? '100%' : '100vh')};
	padding: ${(props) =>
		props.$isTablet ? '10px' : props.$isMobile ? '0px' : '20px'};
	border-right: ${(props) =>
		props.$isMobile ? 'none' : '1px solid var(--color-light-salmon)'};
	border-bottom: ${(props) =>
		props.$isMobile ? '1px solid var(--color-light-salmon)' : 'none'};

	& div {
		margin: 10px 0;
		text-align: center;

		& button:hover {
			border-radius: 3px;
			background-color: var(--color-peach);
		}
	}
`;

export const NavOption = styled.button<NavOptionProps>`
	padding: 5px;
	margin-bottom: 5px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: ${(props) =>
		props.$isTablet ? '16px' : props.$isMobile ? '16px' : '18px'};
	cursor: pointer;
`;

export const ButtonWrap = styled.div<NavOptionProps>`
	display: flex;
	width: 100%;
	flex-direction: ${(props) => (props.$isMobile ? 'row' : 'column')};
	justify-content: ${(props) => (props.$isMobile ? 'space-around' : '')};
`;

export const Button = styled.button<NavOptionProps>`
	position: ${(props) => (props.$isMobile ? 'fixed' : '')};
	bottom: ${(props) => (props.$isMobile ? '20px' : 'none')};
	right: ${(props) => (props.$isMobile ? '10px' : 'none')};
	width: ${(props) => (props.$isMobile ? '50px' : '70%')};
	height: ${(props) => (props.$isMobile ? '50px' : '')};
	padding: ${(props) => (props.$isMobile ? '4px' : '10px')};
	border: 0.5px solid var(--color-light-salmon);
	border-radius: ${(props) => (props.$isMobile ? '50%' : '3px')};
	background-color: ${(props) =>
		props.$isMobile ? 'var(--color-peach)' : 'transparent'};
	font-size: ${(props) =>
		props.$isTablet ? '16px' : props.$isMobile ? '16px' : '18px'};
	cursor: pointer;

	&:hover {
		background-color: var(--color-light-salmon);
		color: white;
	}
`;

export const NavOptionWrap = styled.div<NavOptionProps>`
	display: flex;
	flex-direction: column;
`;

export const NavOptionButton = styled.button<NavOptionProps>`
	margin-bottom: 5px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: ${(props) =>
		props.$isTablet ? '14px' : props.$isMobile ? '12px' : '14px'};
	cursor: pointer;
`;

export const NavOptionText = styled.span<NavOptionProps>`
	border-bottom: ${(props) => (props.$isActive ? '0.5px solid black' : 'none')};
`;

export const IoMenuWrap = styled.div`
	padding: 10px;
	margin-right: 8px;
`;

export const StyledIoMenu = styled(IoMenu)`
	color: var(--color-light-salmon);
	width: 20px;
	height: 20px;
`;

export const MenuAndSearchWrap = styled.div`
	display: flex;
`;

export const StyledFaPlus = styled(FaPlus)``;
