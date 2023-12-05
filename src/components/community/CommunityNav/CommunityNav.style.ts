import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

interface NavOptionProps {
	isActive: boolean;
}

export const TitleAndSearchWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 20px;
	border-bottom: 1px solid var(--color-light-salmon);
`;

export const TitleWrap = styled.div`
	margin-top: 10px;

	& span {
		margin-right: 10px;
	}

	& span:nth-child(3) {
		font-size: 24px;
	}
`;

export const SearchWrap = styled.div`
	display: flex;
	justify-content: space-between;
	width: 450px;
	padding: 10px;
	margin-bottom: 10px;
	border: 0.5px solid var(--color-light-salmon);
	border-radius: 20px;

	& input {
		width: 70%;
		border: transparent;
		outline: none;
	}
`;

export const StyledIoIosSearch = styled(IoIosSearch)`
	cursor: pointer;
`;

export const Article = styled.article`
	display: flex;
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
	min-height: 100vh;
	padding: 20px 20px 20px 0;
	border-right: 1px solid var(--color-light-salmon);

	& div {
		margin: 10px 0;
		text-align: center;

		& button:hover {
			border-radius: 3px;
			background-color: var(--color-peach);
		}
	}
`;

export const NavOption = styled.button`
	padding: 5px;
	margin-bottom: 5px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 18px;
	cursor: pointer;
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	width: 65%;
	padding: 10px;
	border: 0.5px solid var(--color-light-salmon);
	border-radius: 3px;
	background-color: transparent;
	cursor: pointer;
`;

export const NavOptionWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NavOptionButton = styled.button`
	margin-bottom: 5px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 14px;
	cursor: pointer;
`;

export const NavOptionText = styled.span<NavOptionProps>`
	border-bottom: ${(props) => (props.isActive ? '0.5px solid black' : 'none')};
`;
