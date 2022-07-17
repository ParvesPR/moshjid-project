import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import Login from './pages/Home/Login/Login';
import SignUp from './pages/Home/Login/SignUp';
import Error404 from './pages/Shared/Error404';
import Blogs from './pages/Home/Blogs/Blogs';
import RequireAuth from './pages/Home/Login/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Notice from './pages/Notice/Notice';
import AddNotice from './pages/Dashboard/AddNotice/AddNotice';
import Users from './pages/Users/Users';
import AllUsers from './pages/Dashboard/AllUsers/AllUsers';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/notice' element={<Notice></Notice>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/users' element={<Users></Users>} ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route path='addNotice' element={<AddNotice></AddNotice>}></Route>
          <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>

    </div>
  );
}

export default App;
