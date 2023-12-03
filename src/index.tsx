import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Users from './pages/Users/Users';
import ChatBox from './pages/ChatBox/ChatBox';
import NewFamily from './pages/NewFamily/NewFamily';
import AdoptionReviews from './pages/AdoptionReviews/AdoptionReviews';
import Pet from './components/newFamily/Pet/Pet';
import Review from './components/adoptionReviews/Review/Review';
import Community from './pages/Community/Community';
import MyPets from './pages/MyPets/MyPets';
import Mypet from './components/community/Mypet/Mypet';
import Mates from './pages/Mates/Mates';
import Mate from './components/community/Mate/Mate';
import Losts from './pages/Losts/Losts';
import Lost from './components/community/Lost/Lost';
import Tips from './pages/Tips/Tips';
import Tip from './components/community/Tip/Tip';
import Family from './components/newFamily/Family/Family';
import Reviews from './components/adoptionReviews/Reviews/Reviews';
import MyPetRoot from './components/community/MyPetRoot/MyPetRoot';
import MateRoot from './components/community/MateRoot/MateRoot';
import LostRoot from './components/community/LostRoot/LostRoot';
import TipRoot from './components/community/TipRoot/TipRoot';
import User from './components/users/User/User';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'users/:id',
				element: <Users />,
				children: [
					{ index: true, element: <User /> },
					{ path: 'chatBox', element: <ChatBox /> },
				],
			},
			{
				path: 'newFamily',
				element: <NewFamily />,
				children: [
					{ index: true, element: <Family /> },
					{ path: 'pet/:petId', element: <Pet /> },
				],
			},
			{
				path: 'adoptionReviews',
				element: <AdoptionReviews />,
				children: [
					{ index: true, element: <Reviews /> },
					{ path: 'review/:reviewId', element: <Review /> },
				],
			},
			{
				path: 'community',
				element: <Community />,
				children: [
					{
						path: 'myPets',
						element: <MyPets />,
						children: [
							{ index: true, element: <MyPetRoot /> },
							{ path: 'myPet:/myPetId', element: <Mypet /> },
						],
					},
					{
						path: 'mates',
						element: <Mates />,
						children: [
							{ index: true, element: <MateRoot /> },
							{ path: 'mate/:mateId', element: <Mate /> },
						],
					},
					{
						path: 'losts',
						element: <Losts />,
						children: [
							{ index: true, element: <LostRoot /> },
							{ path: 'lost/:lostId', element: <Lost /> },
						],
					},
					{
						path: 'tips',
						element: <Tips />,
						children: [
							{ index: true, element: <TipRoot /> },
							{ path: 'tip/:tipId', element: <Tip /> },
						],
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
