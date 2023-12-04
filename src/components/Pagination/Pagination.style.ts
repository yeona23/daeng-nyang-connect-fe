import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

export const StyledFaAngleLeft = styled(FaAngleLeft)``;
export const StyledFaAngleRight = styled(FaAngleRight)``;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	& button {
		border: none;
		outline: none;
		background-color: transparent;
		cursor: pointer;
	}
`;
