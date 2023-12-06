import styled, { css } from 'styled-components';

interface BtnProps {
	padding: string;
	addStyle?: string;
}

export const SalmonBtn = styled.button<BtnProps>`
	padding: 10px ${(props) => props.padding};
	border-radius: 8px;
	background-color: var(--color-light-salmon);
	color: #fff;
	${(props) =>
		props.addStyle &&
		css`
			position: absolute;
			top: 80px;
			right: calc((100vw - 1320px) / 2);
		`}
`;
