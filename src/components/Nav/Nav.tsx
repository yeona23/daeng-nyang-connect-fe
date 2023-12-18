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
import { IoChatbubblesOutline, IoChatbubblesSharp } from 'react-icons/io5';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import scrollNav from '../../utils/scrollNav';
import { useResponsive } from '../../hooks/useResponsive';
import { useState } from 'react';
import MobileMenuDrawer from './MobileMenuDrawer/MobileMenuDrawer';
import localToken from '../../api/LocalToken';

const Nav = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const navigate = useNavigate();
	const { $isMaxWidth, $isMobile } = useResponsive();
	const [mMenuIsOpen, setmMenuIsOpen] = useState(false);

	const scrollProps = scrollNav() ? { $isHome: 'home' } : {};

	const id = 'supercoding@test.com';

	const mMenuClickHandler = () => {
		setmMenuIsOpen((prev) => !prev);
	};

	const userIconClickHandler = () => {
		id ? navigate(`/users/${id}`) : navigate('/login');
	};

	const chatIconClickHandler = () => {
		id ? navigate(`/users/${id}/chatBox`) : navigate('/login');
	};

	const navText = !$isMobile ? 'nav' : 'm-nav';

	return (
		<>
			{$isMobile && mMenuIsOpen && (
				<MobileMenuDrawer setmMenuIsOpen={setmMenuIsOpen} />
			)}
			<HeaderDiv {...scrollProps} $isMobile={$isMobile}>
				<HeaderContenstDiv $isMaxWidth={$isMaxWidth} $isMobile={$isMobile}>
					<HeaderNav>
						<LogoH1 $isMobile={$isMobile}>
							<NavLink to="/">
								<img src="/assets/LOGO.svg" alt="" />
							</NavLink>
						</LogoH1>
						{!$isMobile && (
							<NavUl>
								<NavLi>
									<NavLink className={navText} to="/newFamily">
										새로운 가족 찾기
									</NavLink>
								</NavLi>
								<NavLi>
									<NavLink className={navText} to="/adoptionReviews">
										입양 후기
									</NavLink>
								</NavLi>
								<NavLi>
									<NavLink className={navText} to="/community">
										댕냥 톡톡
									</NavLink>
								</NavLi>
							</NavUl>
						)}
					</HeaderNav>
					<UtilDl>
						<dt></dt>
						<UtilDd $isMobile={$isMobile}>
							{!pathname.includes('chat') ? (
								<IoChatbubblesOutline onClick={chatIconClickHandler} />
							) : (
								<IoChatbubblesSharp />
							)}
						</UtilDd>
						{/* <UtilDd>
						<IoNotificationsOutline />
					</UtilDd> */}
						<UtilDd $isMobile={$isMobile}>
							{$isMobile ? (
								<FiMenu onClick={mMenuClickHandler} />
							) : pathname.includes('users') && !pathname.includes('chat') ? (
								<HiUser />
							) : (
								<HiOutlineUser onClick={userIconClickHandler} />
							)}
						</UtilDd>
					</UtilDl>
				</HeaderContenstDiv>
			</HeaderDiv>
		</>
	);
};

export default Nav;
