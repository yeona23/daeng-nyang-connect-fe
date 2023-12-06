import { useState } from 'react';
import CommunityNav from '../../components/community/CommunityNav/CommunityNav';
import { CommunitySection } from './Community.style';
import BackDrop from '../../components/BackDrop/BackDrop';
import WritingModal from '../../components/community/WritingModal/WritingModal';

const Community = () => {
	const [isPopUp, setIsPopUp] = useState(false);
	return (
		<>
			{isPopUp && <BackDrop setIsPopUp={setIsPopUp} />}
			{isPopUp && <WritingModal />}
			<CommunitySection>
				<CommunityNav setIsPopUp={setIsPopUp} />
			</CommunitySection>
		</>
	);
};

export default Community;
