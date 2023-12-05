import { styled } from 'styled-components';

export const FindFamily = styled.div`
	width: 1320px;
	margin: 0 auto;

	& > div {
		display: flex;
		gap: 50px;
	}
`;

export const CategoryTitle = styled.div`
	justify-content: space-between;
	width: 100%;
	padding-bottom: 20px;
	margin: 70px 0 50px 0;
	border-bottom: 1px solid var(--color-light-salmon);

	& h1 {
		font-size: 36px;
	}
	& button {
		width: 150px;
		padding: 3px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		font-size: 16px;
	}
	& button:hover {
		background: var(--color-light-salmon);
		color: var(--color-peach);
	}
`;

export const FilterItems = styled.div`
	flex: 1;
	height: fit-content;
	padding: 20px;
	border: 1px solid var(--color-light-salmon);
	border-radius: 10px;

	& > div:first-child {
		padding-bottom: 10px;
		margin-bottom: 40px;
		border-bottom: 1px solid var(--color-light-salmon);
		font-size: 20px;
	}
	& > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		gap: 40px;

		& > div:last-child input {
			width: 100%;
			padding: 3px;
			border: 1px solid var(--color-light-salmon);
			outline: none;
		}
	}
	& p {
		margin-bottom: 15px;
		font-size: 18px;
	}

	& label {
		margin: 0 20px 0 5px;
	}
`;

export const ItemList = styled.div`
	display: flex;
	flex: 3;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const ItemBox = styled.div`
	width: calc((100% - 50px) / 2);
	margin-bottom: 50px;
	border: 1px solid var(--color-deep-blue);
	border-radius: 10px;
	overflow: hidden;

	& > div:first-child {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	& > div:last-child {
		position: relative;
		height: 150px;
		padding: 20px;
	}

	& img {
		width: 100%;
		transition: all 0.5s;
	}

	& img:hover {
		scale: 1.1;
	}

	& svg {
		position: absolute;
		top: 30px;
		right: 30px;
		cursor: pointer;
	}

	& button {
		position: absolute;
		bottom: 20px;
		right: 20px;
		padding: 5px 20px;
		border: 1px solid var(--color-light-salmon);
		border-radius: 5px;
		cursor: pointer;
	}
	& button:hover {
		background: var(--color-light-salmon);
		color: var(--color-peach);
	}

	& p {
		margin-bottom: 15px;
	}
`;
