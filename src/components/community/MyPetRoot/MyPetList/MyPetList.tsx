import { useNavigate } from 'react-router-dom';
import { MyPet } from '../MyPetRoot';
import { ImageWrap, MyPetLi, UserWrap } from './MyPetList.style';
import { CiUser } from 'react-icons/ci';
import { useResponsive } from '../../../../hooks/useResponsive';

interface MyPetListProps {
	list: MyPet;
}

const MyPetList = ({ list }: MyPetListProps) => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet } = useResponsive();

	const moveToTheDetailPage = (id: number) => {
		navigate(`/community/myPets/myPet/${id}`);
	};

	return (
		<MyPetLi $isMobile={$isMobile}>
			<ImageWrap onClick={() => moveToTheDetailPage(list.id)}>
				<img src="/assets/cat.jpeg" alt="" />
			</ImageWrap>
			<UserWrap $isMobile={$isMobile} $isTablet={$isTablet}>
				<div>
					<CiUser />
				</div>
				<span>{list.userName}</span>
			</UserWrap>
		</MyPetLi>
	);
};

export default MyPetList;
