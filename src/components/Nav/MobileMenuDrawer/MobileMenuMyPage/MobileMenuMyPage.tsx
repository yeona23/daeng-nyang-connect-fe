import { Link } from 'react-router-dom';
import {
	MobileDrawerFirstLi,
	UserImgDiv,
	UserNameEm,
} from '../MobileMenuDrawer.style';

const MobileMenuMyPage = () => {
	return (
		<ul style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
			<MobileDrawerFirstLi>
				<UserImgDiv>
					<img src="/assets/community2.jpg" alt="" />
				</UserImgDiv>
			</MobileDrawerFirstLi>
			<MobileDrawerFirstLi style={{ marginBottom: '8px' }}>
				<p style={{ marginLeft: '16px' }}>닉네임</p>
			</MobileDrawerFirstLi>
		</ul>
	);
};

export default MobileMenuMyPage;
