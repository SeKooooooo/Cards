import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Registration } from './pages/Registration/Registration';
import { Layout } from './components/Layout';
import { Main } from './pages/Main/Main';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route element={<Layout/>}>
          <Route path='/main' element={<Main/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
