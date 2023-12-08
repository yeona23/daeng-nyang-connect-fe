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
import { NavLink } from 'react-router-dom';
import scrollNav from '../../utils/scrollNav';

const Nav = () => {
	const props = scrollNav() ? { isHome: 'home' } : {};
	const id = 3;

	return (
		<HeaderDiv {...props}>
			<HeaderContenstDiv>
				<HeaderNav>
					<LogoH1>
						<NavLink to="/">
							<img src="/assets/LOGO.svg" alt="" />
						</NavLink>
					</LogoH1>
					<NavUl>
						<NavLi>
							<NavLink className="nav" to="/newFamily">
								새로운 가족 찾기
							</NavLink>
						</NavLi>
						<NavLi>
							<NavLink className="nav" to="/adoptionReviews">
								입양 후기
							</NavLink>
						</NavLi>
						<NavLi>
							<NavLink className="nav" to="/community">
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
						<NavLink to={`/users/${id}`}>
							<HiOutlineUser />
						</NavLink>
					</UtilDd>
				</UtilDl>
			</HeaderContenstDiv>
		</HeaderDiv>
	);
};

export default Nav;
