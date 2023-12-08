import styled from 'styled-components';

interface NavOptionProps {
	$isTablet?: boolean;
	$isMobile?: boolean;
}

export const MateLists = styled.ul<NavOptionProps>`
	display: grid;
	grid-template-columns: ${(props) =>
		props.$isTablet
			? 'repeat(2, 1fr)'
			: props.$isMobile
			  ? 'repeat(1, 1fr)'
			  : 'repeat(3, 1fr)'};
	grid-gap: ${(props) => (props.$isTablet ? '10px' : '20px')};
	list-style: none;
	width: 100%;
	padding: 0;
`;
