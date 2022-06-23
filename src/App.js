import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import NavBar from '../src/pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
      </Routes>

    </div>
  );
}

export default App;
