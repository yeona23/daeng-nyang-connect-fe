import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
	Article,
	Button,
	ButtonWrap,
	Nav,
	NavOption,
	NavOptionButton,
	NavOptionText,
	NavOptionWrap,
	SearchWrap,
	StyledIoIosSearch,
	TitleAndSearchWrap,
	TitleWrap,
} from './CommunityNav.style';

const CommunityNav = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);
	const category = queryParams.get('category');

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

	const moveToTheCommunity = (community: string) => {
		navigate(`/community/${community}`);
	};

	const moveToTheCategory = (community: string, category: string) => {
		navigate(`/community/${community}?category=${category}`);
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
					<StyledIoIosSearch />
				</SearchWrap>
			</TitleAndSearchWrap>
			<Article>
				<Nav>
					<ButtonWrap>
						<NavOptionWrap>
							<NavOption onClick={() => moveToTheCommunity('myPets')}>
								<NavOptionText isActive={displayLabel === '나의 댕냥이'}>
									나의 댕냥이
								</NavOptionText>
							</NavOption>
						</NavOptionWrap>
						<NavOptionWrap>
							<NavOption onClick={() => moveToTheCommunity('tips')}>
								<NavOptionText isActive={displayLabel === '댕냥 꿀팁'}>
									댕냥 꿀팁
								</NavOptionText>
							</NavOption>
							{displayLabel === '댕냥 꿀팁' && (
								<>
									<NavOptionButton
										onClick={() => moveToTheCategory('tips', 'item')}>
										<NavOptionText isActive={category === 'item'}>
											용품 리뷰
										</NavOptionText>
									</NavOptionButton>
									<NavOptionButton
										onClick={() => moveToTheCategory('tips', 'center')}>
										<NavOptionText isActive={category === 'center'}>
											병원 리뷰
										</NavOptionText>
									</NavOptionButton>
									<NavOptionButton
										onClick={() => moveToTheCategory('tips', 'etc')}>
										<NavOptionText isActive={category === 'etc'}>
											그 외
										</NavOptionText>
									</NavOptionButton>
								</>
							)}
						</NavOptionWrap>
						<NavOptionWrap>
							<NavOption onClick={() => moveToTheCommunity('mates')}>
								<NavOptionText isActive={displayLabel === '댕냥 메이트'}>
									댕냥 메이트
								</NavOptionText>
							</NavOption>
							{displayLabel === '댕냥 메이트' && (
								<>
									<NavOptionButton
										onClick={() => moveToTheCategory('mates', 'mate')}>
										<NavOptionText isActive={category === 'mate'}>
											산책 메이트
										</NavOptionText>
									</NavOptionButton>
									<NavOptionButton
										onClick={() => moveToTheCategory('mates', 'care')}>
										<NavOptionText isActive={category === 'care'}>
											맡아주실 분
										</NavOptionText>
									</NavOptionButton>
								</>
							)}
						</NavOptionWrap>
						<NavOptionWrap>
							<NavOption onClick={() => moveToTheCommunity('losts')}>
								<NavOptionText isActive={displayLabel === '댕냥 미아센터'}>
									댕냥 미아센터
								</NavOptionText>
							</NavOption>
						</NavOptionWrap>
					</ButtonWrap>
					<Button>글쓰기</Button>
				</Nav>
				<Outlet />
			</Article>
		</>
	);
};

export default CommunityNav;
