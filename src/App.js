import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import Blogs from './pages/Home/Blogs/Blogs';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
