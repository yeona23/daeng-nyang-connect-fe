import styled from 'styled-components';

export const Article = styled.article`
	padding: 10px;
	margin-top: 10px;
`;

export const TipsNav = styled.nav`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
	border-bottom: 1px solid var(--color-light-salmon);

	& > div {
		&:first-child {
			flex: 6;
			text-align: center;
		}

		&:nth-child(2) {
			flex: 1.75;
			text-align: center;
		}

		&:nth-child(3) {
			flex: 1.75;
			text-align: center;
		}

		&:last-child {
			flex: 1;
			text-align: center;
		}
	}
`;

export const TipLists = styled.ul`
	margin-top: 20px;
`;
