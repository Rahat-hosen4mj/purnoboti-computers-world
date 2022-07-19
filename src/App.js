import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<RequireAuth><Blog /></RequireAuth>}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
