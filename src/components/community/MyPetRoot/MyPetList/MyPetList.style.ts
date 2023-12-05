import styled from 'styled-components';

export const MyPetLi = styled.li`
	width: 100%;

	& img {
		width: 100%;
		cursor: pointer;
	}
`;

export const UserWrap = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid black;
		width: 30px;
		height: 30px;
		margin-right: 8px;
		cursor: pointer;
	}
`;
