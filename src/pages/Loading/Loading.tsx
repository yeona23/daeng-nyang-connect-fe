import { LoadingContents, LoadingText, LoadingWrap } from './Loading.style';

const Loading = () => {
	return (
		<LoadingWrap>
			<LoadingContents>
				<LoadingText>LOADING . . .</LoadingText>
				<img src="./moving_paw.gif" alt="" />
			</LoadingContents>
		</LoadingWrap>
	);
};

export default Loading;
