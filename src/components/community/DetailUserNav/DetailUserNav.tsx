import { CiUser } from 'react-icons/ci';
import { CiMenuKebab } from 'react-icons/ci';

import {
	CreatedAtText,
	DetailUserWrap,
	InfoWrap,
	KebabWrap,
	LikeCount,
	LikeWrap,
	StyledFaHeart,
	SubInfoWrap,
	UserImageWrap,
} from './DetailUserNav.style';

const DetailUserNav = () => {
	return (
		<DetailUserWrap>
			<InfoWrap>
				<UserImageWrap>
					<CiUser />
				</UserImageWrap>
				<div>
					<div>user 닉네임</div>
					<CreatedAtText>2023-08-17</CreatedAtText>
				</div>
			</InfoWrap>
			<SubInfoWrap>
				<LikeWrap>
					<div>
						<StyledFaHeart />
					</div>
					<LikeCount>1000</LikeCount>{' '}
				</LikeWrap>
				<KebabWrap>
					<CiMenuKebab />
				</KebabWrap>
			</SubInfoWrap>
		</DetailUserWrap>
	);
};

export default DetailUserNav;
