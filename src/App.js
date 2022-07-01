import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
<<<<<<< HEAD
import Login from './pages/Home/Login/Login';
import SignUp from './pages/Home/Login/SignUp';
import Error404 from './pages/Shared/Error404';
import NavBar from './pages/Shared/NavBar/NavBar';
import Blogs from './pages/Home/Blogs/Blogs';
=======
import Blogs from './pages/Home/Blogs/Blogs';
import About from './pages/About/About';
>>>>>>> f6c010b93ff79fde18f21f5bd29b9c92ca3b4c69

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
<<<<<<< HEAD
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
=======
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/about' element={<About></About>}> </Route>
>>>>>>> f6c010b93ff79fde18f21f5bd29b9c92ca3b4c69
      </Routes>

    </div>
  );
}

export default App;
