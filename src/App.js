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
import Purchage from './Pages/Purchage/Purchage';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/:purchage' element={<RequireAuth><Purchage /></RequireAuth>}></Route>
        <Route path='/blog' element={<RequireAuth><Blog /></RequireAuth>}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
        <Route index element={<MyOrder />}></Route>
      <Route path='myReview' element={<MyReview />} ></Route>
      <Route path='profile' element={<MyProfile />} ></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
