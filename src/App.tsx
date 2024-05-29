import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  {RegistrationPage}  from './pages/RegistrationPage/RegistrationPage';
import { Layout } from './components/Layout';
import  MainPage  from './pages/MainPage/MainPage';
import  ProfilePage  from './pages/ProfilePage/ProfilePage';
import  CardPage  from './pages/CardPage/CardPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RegistrationPage />} />
				<Route element={<Layout />}>
					<Route
						path="/cards"
						element={
							<MainPage/>
						}
					/>
					<Route
						path="/profile"
						element={
							<ProfilePage />
						}
					/>
					<Route
						path="/cards/:id"
						element={
							<CardPage/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
