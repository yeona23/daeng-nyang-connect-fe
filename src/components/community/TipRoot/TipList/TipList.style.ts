import styled from 'styled-components';

export const TipLi = styled.li`
	display: flex;
	list-style: none;
	padding: 16px 0px;
	border-bottom: 1px solid var(--color-peach);
	cursor: pointer;

	width: 100%;
	display: flex;

	&:hover {
		background-color: var(--color-peach);
		color: white;
	}

	& > div {
		&:first-child {
			flex: 6;
			padding-left: 10px;
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
