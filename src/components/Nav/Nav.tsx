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
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import scrollNav from '../../utils/scrollNav';
import { useResponsive } from '../../hooks/useResponsive';

const Nav = () => {
	const { $isMaxWidth, $isTablet, $isMobile } = useResponsive();
	const props = scrollNav() ? { $isHome: 'home' } : {};
	const id = 3;
	const navText = !$isMobile ? 'nav' : 'm-nav';
	return (
		<HeaderDiv {...props} $isMobile={$isMobile}>
			<HeaderContenstDiv $isMaxWidth={$isMaxWidth}>
				<HeaderNav>
					<LogoH1 $isMobile={$isMobile}>
						<NavLink to="/">
							<img src="/assets/LOGO.svg" alt="" />
						</NavLink>
					</LogoH1>
					<NavUl $isMobile={$isMobile}>
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
				</HeaderNav>
				<UtilDl>
					<dt></dt>
					<UtilDd>
						<NavLink to={`/users/${id}/chatBox`}>
							<IoChatbubblesOutline />
						</NavLink>
					</UtilDd>
					{/* <UtilDd>
						<IoNotificationsOutline />
					</UtilDd> */}
					<UtilDd>
						{$isMobile ? (
							<FiMenu />
						) : (
							<NavLink to={`/users/${id}`}>
								<HiOutlineUser />
							</NavLink>
						)}
					</UtilDd>
				</UtilDl>
			</HeaderContenstDiv>
		</HeaderDiv>
	);
};

export default Nav;
