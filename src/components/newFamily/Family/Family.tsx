import { useNavigate } from 'react-router-dom';
import NewFamilyList from './NewFamilyList';
import { CategoryTitle, FilterItems, FindFamily } from '../NewFamily.style';
import { useResponsive } from '../../../hooks/useResponsive';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';

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

	const getRegisterBTNSize = () => {
		if ($isMobile) return 50;
		if ($isTablet) return 60;
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
								<input
									type="text"
									name="location"
									id="location"
									placeholder="지역을 입력해주세요"
								/>
							</div>
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
			<HiMiniPlusCircle
				className="register-fixed-btn"
				color="var(--color-light-salmon)"
				size={getRegisterBTNSize()}
				onClick={clickRegistrationHandler}
			/>
		</FindFamily>
	);
};

export default Family;
