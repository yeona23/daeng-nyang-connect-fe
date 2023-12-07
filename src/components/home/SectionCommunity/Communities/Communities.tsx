import { useState } from 'react';
import {
	CommunityImgDiv,
	CommunityLi,
	CommunityTitleDt,
} from './Communities.style';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface CommunityProps {
	to: string;
	img: string;
	title: string;
	children: string;
}

const Communities = ({ to, title, img, children }: CommunityProps) => {
	return (
		<CommunityLi>
			<Link to={to}>
				<CommunityImgDiv img={img}></CommunityImgDiv>
				<dl>
					<CommunityTitleDt>{title}</CommunityTitleDt>
					<dd>{children}</dd>
				</dl>
			</Link>
		</CommunityLi>
	);
};

export default Communities;
