import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './Pages/Home'
import About from './Pages/About';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Login from './Pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

