import {
	FooterCopyrightDiv,
	FooterCopyrightP,
	FooterDiv,
	FooterDt,
	FooterFlexDiv,
	FooterInnerDiv,
	FooterMenuDD,
	FooterMenuDiv,
} from './Footer.style';

const utilMenus = {
	about: ['댕냥 커넥트란?', '이용 안내'],
	siteMap: ['새로운 가족 찾기', '입양 후기', '커뮤니티', '마이페이지'],
	qna: ['자주하는 질문', 'Q & A', '고객센터'],
};

const Footer = () => {
	return (
		<FooterDiv>
			<FooterInnerDiv>
				<FooterFlexDiv>
					<h1>
						<img src="assets/LOGO(footer).svg" alt="" />
					</h1>
					<FooterMenuDiv>
						<dl>
							<FooterDt>ABOUT US</FooterDt>
							{utilMenus.about.map((text, index) => (
								<FooterMenuDD key={index}>{text}</FooterMenuDD>
							))}
						</dl>
						<dl>
							<FooterDt>사이트 맵</FooterDt>
							{utilMenus.siteMap.map((text, index) => (
								<FooterMenuDD key={index}>{text}</FooterMenuDD>
							))}
						</dl>
						<dl>
							<FooterDt>문의하기</FooterDt>
							{utilMenus.qna.map((text, index) => (
								<FooterMenuDD key={index}>{text}</FooterMenuDD>
							))}
						</dl>
					</FooterMenuDiv>
				</FooterFlexDiv>
				<FooterCopyrightDiv>
					<FooterCopyrightP>
						Copyright© All right reserved by 댕냥커넥트.
					</FooterCopyrightP>
				</FooterCopyrightDiv>
			</FooterInnerDiv>
		</FooterDiv>
	);
};

export default Footer;
