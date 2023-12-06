import {
	HeaderContenstDiv,
	HeaderDiv,
	HeaderNav,
	NavUl,
	LogoH1,
	NavLi,
	UtilDl,
	UtilDd,
} from './Nav.style';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { HiOutlineUser } from 'react-icons/hi';
const Nav = () => {
	return (
		<HeaderDiv>
			<HeaderContenstDiv>
				<HeaderNav>
					<LogoH1>
						<img src="assets/LOGO.svg" alt="" />
					</LogoH1>
					<NavUl>
						<NavLi>새로운 가족 찾기</NavLi>
						<NavLi>입양 후기</NavLi>
						<NavLi>댕냥 톡톡</NavLi>
					</NavUl>
				</HeaderNav>
				<UtilDl>
					<dt></dt>
					<UtilDd>
						<IoChatbubblesOutline />
					</UtilDd>
					{/* <UtilDd>
						<IoNotificationsOutline />
					</UtilDd> */}
					<UtilDd>
						<HiOutlineUser />
					</UtilDd>
				</UtilDl>
			</HeaderContenstDiv>
		</HeaderDiv>
	);
};

export default Nav;
