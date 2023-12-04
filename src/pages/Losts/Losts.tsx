import { Outlet } from 'react-router-dom';
import { Article } from './Losts.style';

const Losts = () => {
	return (
		<Article>
			<Outlet />
		</Article>
	);
};

export default Losts;
