import styled from 'styled-components';

interface NavOptionProps {
	isActive: boolean;
}

export const TitleAndSearchWrap = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid var(--color-light-salmon);
	padding-left: 20px;
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
	border-radius: 20px;
	border: 0.5px solid var(--color-light-salmon);
	padding: 10px;
	margin-bottom: 10px;

	& input {
		width: 70%;
		border: transparent;
		outline: none;
	}
`;

export const Article = styled.article`
	display: flex;
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15%;
	height: 100vh;
	padding: 20px 20px 20px 0;
	border-right: 1px solid var(--color-light-salmon);

	& div {
		margin: 20px 0;
		text-align: center;

		& button:hover {
			border-radius: 3px;
			background-color: var(--color-peach);
		}
	}
`;

export const NavOption = styled.button<NavOptionProps>`
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	font-size: 18px;
	margin-bottom: 5px;
	padding: 5px;

	border-bottom: ${(props) => (props.isActive ? '0.5px solid black' : 'none')};
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	border: 0.5px solid var(--color-light-salmon);
	border-radius: 3px;
	background-color: transparent;
	width: 65%;
	padding: 10px;
	cursor: pointer;
`;
