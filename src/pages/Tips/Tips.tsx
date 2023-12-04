import { Outlet } from 'react-router-dom';
import { Article } from './Tips.style';

const Tips = () => {
	return (
		<Article>
			<Outlet />
		</Article>
	);
};

export default Tips;
