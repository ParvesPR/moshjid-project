import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import SignUp from './pages/Home/Login/SignUp';
import Error404 from './pages/Shared/Error404';
import NavBar from './pages/Shared/NavBar/NavBar';
import Blogs from './pages/Home/Blogs/Blogs';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
