import { useNavigate } from 'react-router-dom';
import NewFamilyList from './NewFamilyList';
import { CategoryTitle, FilterItems, FindFamily } from '../NewFamily.style';
import { useResponsive } from '../../../hooks/useResponsive';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Family = () => {
	const navigate = useNavigate();
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();
	const [isFilterVisible, setIsFilterVisible] = useState($isPc);

	const clickRegistrationHandler = () => {
		const url = '/newFamily/petRegistration';
		navigate(url);
	};

	const toggleFilterVisibility = () => {
		setIsFilterVisible((prev) => !prev);
	};

	return (
		<FindFamily
			$isMobile={$isMobile}
			$isTablet={$isTablet}
			$isPc={$isPc}
			$isMaxWidth={$isMaxWidth}>
			<CategoryTitle
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<h1>새로운 가족 찾기</h1>
				<button onClick={clickRegistrationHandler} className="register-btn">
					등록하기
				</button>
				<button onClick={toggleFilterVisibility} className="filter-btn">
					찾기
				</button>
			</CategoryTitle>
			<div>
				{($isPc || isFilterVisible) && (
					<FilterItems
						$isMobile={$isMobile}
						$isTablet={$isTablet}
						$isPc={$isPc}
						$isMaxWidth={$isMaxWidth}>
						<div>찾기</div>
						<IoCloseOutline
							className="filter-close-btn"
							size={25}
							onClick={toggleFilterVisibility}
						/>
						<div>
							<div>
								<p>축종</p>
								<input type="radio" name="animalType" id="all" />
								<label htmlFor="all">전체</label>
								<input type="radio" name="animalType" id="dog" />
								<label htmlFor="dog">개</label>
								<input type="radio" name="animalType" id="cat" />
								<label htmlFor="cat">고양이</label>
							</div>
							<div>
								<p>완료여부</p>
								<input type="radio" name="adoption" id="all" />
								<label htmlFor="all">전체</label>
								<input type="radio" name="adoption" id="yet" />
								<label htmlFor="yet">입양대기</label>
								<input type="radio" name="adoption" id="done" />
								<label htmlFor="done">입양완료</label>
							</div>
							<div>
								<p>지역</p>
								<select id="regionSelect">
									<option value="" disabled selected hidden>
										지역을 선택해주세요
									</option>
									<option value="seoul">서울</option>
									<option value="busan">부산</option>
									<option value="incheon">인천</option>
									<option value="daegu">대구</option>
									<option value="gwangju">광주</option>
									<option value="daejeon">대전</option>
									<option value="ulsan">울산</option>
									<option value="sejong">세종</option>
									<option value="gyeonggi">경기</option>
									<option value="gangwon">강원</option>
									<option value="chungbuk">충북</option>
									<option value="chungnam">충남</option>
									<option value="jeonbuk">전북</option>
									<option value="jeonnam">전남</option>
									<option value="gyeongbuk">경북</option>
									<option value="gyeongnam">경남</option>
									<option value="jeju">제주</option>
								</select>
							</div>
							<button>검색하기</button>
						</div>
					</FilterItems>
				)}

				<NewFamilyList
					$isMobile={$isMobile}
					$isTablet={$isTablet}
					$isPc={$isPc}
					$isMaxWidth={$isMaxWidth}
				/>
			</div>
			<div
				className="register-fixed-btn-box"
				onClick={clickRegistrationHandler}>
				<FaPlus className="register-fixed-btn" color="#fff" size={20} />
			</div>
		</FindFamily>
	);
};

export default Family;
