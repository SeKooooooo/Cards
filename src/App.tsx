import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Registration } from './pages/Registration/Registration';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RequireAuth } from './components/hoc/RequireAuth';
import { CardPage } from './pages/CardPage/CardPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route element={<Layout />}>
					<Route
						path="/cards"
						element={
							<RequireAuth>
								<MainPage />
							</RequireAuth>
						}
					/>
					<Route
						path="/profile"
						element={
							<RequireAuth>
								<ProfilePage />
							</RequireAuth>
						}
					/>
					<Route
						path="/cards/:id"
						element={
							<RequireAuth>
								<CardPage/>
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
