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
import { useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface AnimalData {
	animalId: number;
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
	userNickname: string;
}

interface RootState {
	animal: AnimalData[];
}

const NewFamilyDetail: React.FC = () => {
	const [clickedBookmark, setClickedBookmark] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const { animalId } = useParams<{ animalId: string }>();
	const animalsData = useSelector((state: RootState) => state.animal);
	const animalIdData = animalsData.find(
		(animal) => String(animal.animalId) === String(animalId),
	);

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
			{animalIdData && (
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
							<img src="" alt="" />
						</div>
						<h5></h5>
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
						<img src="" alt="" />
						<BsBookmarkFill
							color={
								clickedBookmark ? 'var(--color-light-salmon)' : '#ffffff70'
							}
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
								<img src="" alt="" />
							</div>
							<h5></h5>
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
							<p>이름 : {animalIdData.animalName}</p>
							<p>나이 : {animalIdData.age} </p>
							<p>지역 : {animalIdData.city}</p>
							<p>품종 : {animalIdData.breed} </p>
							<p>질병 : {animalIdData.disease} </p>
							<p>훈련 여부: {animalIdData.training} </p>
							<p>중성화 여부 : {animalIdData.neutering} </p>
							<p>양육 기간 : {animalIdData.nurturePeriod} </p>
							<p>검강검진 여부 : {animalIdData.healthCheck} </p>
							<p>이별 사유 : {animalIdData.textReason} </p>
							<p>그 외 특이사항: {animalIdData.textEtc} </p>
						</DetailTextBox>
						<button>문의하기</button>
					</div>
				</NewFamilyDetailContainer>
			)}

			{/* {$isPc && <NewFamilySwiper />} */}
		</div>
	);
};

export default NewFamilyDetail;
