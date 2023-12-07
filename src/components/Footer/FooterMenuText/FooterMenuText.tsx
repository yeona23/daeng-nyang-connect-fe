import { Link } from 'react-router-dom';
import { FooterMenuDD } from '../Footer.style';

type TextProps = {
	text: string;
	moveTo: string;
};

const FooterMenuText = ({ text, moveTo }: TextProps) => {
	return (
		<FooterMenuDD>
			<Link to={moveTo} className="footerText">
				{text}
			</Link>
		</FooterMenuDD>
	);
};

export default FooterMenuText;
