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
import { useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

const NewFamilyDetail = () => {
	const location = useLocation();
	const imageUrl = location.state?.imageUrl || '';
	const [clickedBookmark, setClickedBookmark] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const { $isMobile, $isTablet, $isPc, $isMaxWidth } = useResponsive();

	const toggleDropdown = () => {
		setIsDropdownVisible((prev) => !prev);
	};

	const clickBookmarkHandler = () => {
		setClickedBookmark((prev) => !prev);
	};

	return (
		<div>
			<NewFamilyDetailContainer
				$isMobile={$isMobile}
				$isTablet={$isTablet}
				$isPc={$isPc}
				$isMaxWidth={$isMaxWidth}>
				<UserThumbnail className="user-box-mobile">
					<div>
						<img src="/assets/animal2.jpg" alt="" />
					</div>
					<h5>iamzipsa</h5>
					<RiMore2Line
						color="var(--color-light-salmon"
						size={30}
						onClick={toggleDropdown}
					/>
					{isDropdownVisible && (
						<MoreDropdown>
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
						color={clickedBookmark ? 'var(--color-light-salmon)' : '#ffffff70'}
						size={40}
						onClick={clickBookmarkHandler}
					/>
				</DetailImageBox>
				<div>
					<UserThumbnail className="user-box-pc">
						<div>
							<img src="/assets/animal2.jpg" alt="" />
						</div>
						<h5>iamzipsa</h5>
						<RiMore2Line
							color="var(--color-light-salmon"
							size={30}
							onClick={toggleDropdown}
						/>
						{isDropdownVisible && (
							<MoreDropdown>
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
						<p>이름 : </p>
						<p>나이 : </p>
						<p>품종 : </p>
						<p>질병 : </p>
						<p>훈련 여부: </p>
						<p>중성화 여부 : </p>
						<p>검강검진 여부 :</p>
						<p>이별 사유 : </p>
						<p>
							그 외 특이사항:
							dsgfdsghskjgnbdfkjghkufjbvkurdeghowighidfgbwerkithikhdrekaghdkihbdfigberkbvdtgbolsdfhbgtrighsjfklfhjskldklerwtldkdusdgudfgdjfnertmkfvfklgndkjlfsalofszdgfnzsklgndskjlb
							ngbewtbfnjklsdnwelk;nvsd:gbfnjsdkfnbwse;
							SKbfnsjkdFNBejfnsrnfidshfniewfnhidsfnidofnweiofniowtnfdsiofnweifonweoigndreihonrklfanelkgfawgbwetgjbkjgbwegbjkdgbjqkgbkjtbjdbflawnrlkergnkv
							sewjgjvbnarjbdjlsbrfejvbjskfbobnvbiowegjiodsfgsgfgrgrehfgasegFgahrtgdfgddghthgnbxdgnfhdthgnzdrhxtnsrxdhrthjthseythxdyhet
						</p>
					</DetailTextBox>
					<button>문의하기</button>
				</div>
			</NewFamilyDetailContainer>
			{$isPc && <NewFamilySwiper />}
		</div>
	);
};

export default NewFamilyDetail;
