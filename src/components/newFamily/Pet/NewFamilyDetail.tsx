import { BsBookmarkFill } from 'react-icons/bs';
import { RiMore2Line } from 'react-icons/ri';
import {
	DetailImageBox,
	DetailTextBox,
	MoreDropdown,
	NewFamilyDetailContainer,
	UserThumbnail,
} from '../NewFamily.style';
import NewFamilySwiper from './NewFamilySwiper';
import { useEffect, useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAnimal } from '../../../api/NewFamilyApi';

interface AnimalData {
	boardId: number;
	images: string[];
	city: string;
	gender: string;
	animalName: string;
	age: string;
	breed: string;
	disease: string;
	training: string;
	neutering: boolean;
	nurturePeriod: string;
	healthCheck: string;
	textReason: string;
	textEtc: string;
	adoptionStatus: string;
	createdAt: string;
	nickname: string;
	userThumbnail: string;
}

const NewFamilyDetail: React.FC = () => {
	const [clickedBookmark, setClickedBookmark] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const { petId } = useParams();

	const [boardIdData, setBoardIdData] = useState<AnimalData | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAnimal();
				const parsedBoardId = petId ? parseInt(petId) : undefined;
				const boardData = response.find(
					(animal: AnimalData) => animal.boardId === parsedBoardId,
				);
				setBoardIdData(boardData);
			} catch (error) {
				console.error('불러오기 오류', error);
			}
		};
		fetchData();
	}, [petId]);

	const toggleDropdown = () => {
		setIsDropdownVisible((prev) => !prev);
	};

	const clickBookmarkHandler = () => {
		setClickedBookmark((prev) => !prev);
	};

	const getMoreBtnSize = () => {
		if ($isMobile) return 20;
		return 30;
	};
	return (
		<div>
			<NewFamilyDetailContainer
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<UserThumbnail
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
					className="user-box-mobile">
					<div>
						<img src={boardIdData?.userThumbnail} alt={boardIdData?.nickname} />
					</div>
					<h5>{boardIdData?.nickname}</h5>
					<RiMore2Line
						color="var(--color-light-salmon"
						size={getMoreBtnSize()}
						onClick={toggleDropdown}
					/>
					{isDropdownVisible && (
						<MoreDropdown
							$isMobile={$isMobile}
							$isTablet={$isTablet}
							$isPc={$isPc}
							$isMaxWidth={$isMaxWidth}>
							<li>수정하기</li>
							<li>삭제하기</li>
						</MoreDropdown>
					)}
				</UserThumbnail>
				<DetailImageBox
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}>
					<img src={boardIdData?.images[0]} alt={boardIdData?.animalName} />
					<BsBookmarkFill
						color={clickedBookmark ? 'var(--color-light-salmon)' : '#ffffff70'}
						size={40}
						onClick={clickBookmarkHandler}
					/>
				</DetailImageBox>
				<div>
					<UserThumbnail
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}
						className="user-box-pc">
						<div>
							<img
								src={boardIdData?.userThumbnail}
								alt={boardIdData?.nickname}
							/>
						</div>
						<h5>{boardIdData?.nickname}</h5>
						<RiMore2Line
							color="var(--color-light-salmon"
							size={30}
							onClick={toggleDropdown}
						/>
						{isDropdownVisible && (
							<MoreDropdown
								$isMobile={$isMobile}
								$isTablet={$isTablet}
								$isPc={$isPc}
								$isMaxWidth={$isMaxWidth}>
								<li>수정하기</li>
								<li>삭제하기</li>
							</MoreDropdown>
						)}
					</UserThumbnail>
					<DetailTextBox
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<p>이름 : {boardIdData?.animalName}</p>
						<p>나이 : {boardIdData?.age} </p>
						<p>지역 : {boardIdData?.city}</p>
						<p>품종 : {boardIdData?.breed}</p>
						<p>질병 : {boardIdData?.disease}</p>
						<p>훈련 여부: {boardIdData?.training}</p>
						<p>중성화 여부 : {boardIdData?.neutering}</p>
						<p>양육 기간 : {boardIdData?.nurturePeriod}</p>
						<p>검강검진 여부 : {boardIdData?.healthCheck}</p>
						<p>이별 사유 : {boardIdData?.textReason}</p>
						<p>그 외 특이사항: {boardIdData?.textEtc}</p>
					</DetailTextBox>
					<button>문의하기</button>
				</div>
			</NewFamilyDetailContainer>

			{/* {$isPc && <NewFamilySwiper />} */}
		</div>
	);
};

export default NewFamilyDetail;
