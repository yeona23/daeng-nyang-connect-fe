import {
	FooterCopyrightDiv,
	FooterCopyrightP,
	FooterDiv,
	FooterDt,
	FooterFlexDiv,
	FooterInnerDiv,
	FooterLogo,
	FooterMenuDD,
	FooterMenuDiv,
} from './Footer.style';
import FooterMenuText from './FooterMenuText/FooterMenuText';

const utilMenus = {
	about: ['댕냥 커넥트란?', '이용 안내'],
	qna: ['자주하는 질문', 'Q & A', '고객센터'],
};

const Footer = () => {
	const id = 3;
	return (
		<FooterDiv>
			<FooterInnerDiv>
				<FooterFlexDiv>
					<h1>
						<FooterLogo src="/assets/LOGO(footer).svg" alt="" />
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
							<FooterMenuText
								key={1}
								text="새로운 가족 찾기"
								moveTo="/newFamily"
							/>
							<FooterMenuText
								key={2}
								text="입양 후기"
								moveTo="/adoptionReviews"
							/>
							<FooterMenuText key={3} text="커뮤니티" moveTo="/community" />
							<FooterMenuText
								key={4}
								text="마이페이지"
								moveTo={`/users/${id}`}
							/>
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
