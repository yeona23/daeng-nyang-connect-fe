import { BsBookmarkFill } from 'react-icons/bs';
import { RiMore2Line } from 'react-icons/ri';
import {
	DetailImageBox,
	DetailTextBox,
	MoreDropdown,
	NewFamilyDetailContainer,
	UserThumbnail,
} from '../NewFamily.style';
import { useLocation } from 'react-router-dom';
import NewFamilySwiper from './NewFamilySwiper';
import { useEffect, useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { getAnimal } from '../../../api/NewFamilyApi';

interface AnimalInfo {
	animalId: number;
	image: string;
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
}

const NewFamilyDetail = () => {
	const location = useLocation();
	const animalId = Number(location.pathname.split('/').pop());
	const [animalInfo, setAnimalInfo] = useState<AnimalInfo | null>(null);
	const imageUrl = location.state?.imageUrl || '';
	const [clickedBookmark, setClickedBookmark] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	useEffect(() => {
		const fetchAnimalInfo = async () => {
			try {
				const response = await getAnimal();
				setAnimalInfo(response);
			} catch (error) {
				console.error('불러오는 중 에러 발생:', error);
			}
		};

		if (animalId) {
			fetchAnimalInfo();
		}
	}, [animalId]);

	const toggleDropdown = () => {
		setIsDropdownVisible((prev) => !prev);
	};

	const clickBookmarkHandler = () => {
		setClickedBookmark((prev) => !prev);
	};

	const getMoreBtnSize = () => {
		if ($isMobile) return 20;
		if ($isTablet) return 30;
		if ($isPc) return 30;
	};

	return (
		<div>
			{animalInfo && (
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
							<img src="/assets/animal2.jpg" alt="" />
						</div>
						<h5>iamzipsa</h5>
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
						<img src={imageUrl} alt="" />
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
								<img src={animalInfo.image} alt="" />
							</div>
							<h5>iamzipsa</h5>
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
							<p>이름 : {animalInfo.animalName}</p>
							<p>나이 : {animalInfo.age} </p>
							<p>품종 : {animalInfo.breed} </p>
							<p>질병 : {animalInfo.disease} </p>
							<p>훈련 여부: {animalInfo.training} </p>
							<p>중성화 여부 : {animalInfo.neutering} </p>
							<p>양육 기간 : {animalInfo.nurturePeriod} </p>
							<p>검강검진 여부 : {animalInfo.healthCheck}</p>
							<p>이별 사유 : {animalInfo.textReason} </p>
							<p>그 외 특이사항:{animalInfo.textEtc}</p>
						</DetailTextBox>
						<button>문의하기</button>
					</div>
				</NewFamilyDetailContainer>
			)}

			{$isPc && <NewFamilySwiper />}
		</div>
	);
};

export default NewFamilyDetail;
