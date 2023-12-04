import { Outlet, useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import {
	Article,
	Button,
	ButtonWrap,
	Nav,
	NavOption,
	SearchWrap,
	TitleAndSearchWrap,
	TitleWrap,
} from './CommunityNav.style';

const CommunityNav = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const routeLabels: Record<string, string> = {
		'/community/myPets': '나의 댕냥이',
		'/community/tips': '댕냥 꿀팁',
		'/community/mates': '댕냥 메이트',
		'/community/losts': '댕냥 미아센터',
	};

	const currentLabel: string | undefined = Object.keys(routeLabels).find(
		(key) => location.pathname.startsWith(key),
	);

	const displayLabel = currentLabel ? routeLabels[currentLabel] : '나의 댕냥이';

	const moveToTheCommunity = (category: string) => {
		navigate(`/community/${category}`);
	};

	return (
		<>
			<TitleAndSearchWrap>
				<TitleWrap>
					<span>댕냥 톡톡</span>
					<span>&gt;</span>
					<span>{displayLabel}</span>
				</TitleWrap>
				<SearchWrap>
					<input type="text" placeholder="검색어를 입력해주세요" />
					<IoIosSearch />
				</SearchWrap>
			</TitleAndSearchWrap>
			<Article>
				<Nav>
					<ButtonWrap>
						<NavOption
							isActive={displayLabel === '나의 댕냥이'}
							onClick={() => moveToTheCommunity('myPets')}>
							나의 댕냥이
						</NavOption>
						<NavOption
							isActive={displayLabel === '댕냥 꿀팁'}
							onClick={() => moveToTheCommunity('tips')}>
							댕냥 꿀팁
						</NavOption>
						<NavOption
							isActive={displayLabel === '댕냥 메이트'}
							onClick={() => moveToTheCommunity('mates')}>
							댕냥 메이트
						</NavOption>
						<NavOption
							isActive={displayLabel === '댕냥 미아센터'}
							onClick={() => moveToTheCommunity('losts')}>
							댕냥 미아센터
						</NavOption>
					</ButtonWrap>
					<Button>글쓰기</Button>
				</Nav>
				<Outlet />
			</Article>
		</>
	);
};

export default CommunityNav;
