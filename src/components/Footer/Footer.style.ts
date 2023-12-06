import styled from 'styled-components';

export const FooterDiv = styled.div`
	height: 420px;
	background-color: var(--color-deep-blue);
`;
export const FooterInnerDiv = styled.div`
	position: relative;
	max-width: 1320px;
	height: 100%;
	padding-top: 55px;
	margin: auto;
`;
export const FooterFlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const FooterMenuDiv = styled(FooterFlexDiv)`
	width: 30%;
`;
export const FooterDt = styled.dt`
	margin-bottom: 16px;
	font-size: 24px;
	line-height: 1.6;
	color: #fff;
`;
export const FooterMenuDD = styled.dd`
	line-height: 1.8;
	color: #fff;
`;
export const FooterCopyrightDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	border-top: 1px solid var(--color-peach);
	text-align: center;
`;
export const FooterCopyrightP = styled.p`
	padding: 20px 0;
	color: var(--color-peach);
`;
