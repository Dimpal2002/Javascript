import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Home } from '@mui/icons-material';
import Home from './pages/Home/index';
import About from './pages/About/index';

function App() {
  return (
    <div>
      <header>
        <ul className='head'>
          <li>About Us</li>
          <li>|</li>
          <li>My Account</li>
          <li>|</li>
          <li>Wishlist</li>
          <li>|</li>
          <li>Order Tracking</li>
        </ul>
        <p>Get great devices up to 50% off View details</p>
        <ul className='head head1'>
          <li>Need help?Call Us:+ 1800 900</li>
          <li>|</li>
          <li>English</li>
          <li>|</li>
          <li>USD</li>
        </ul>
      </header>
      <hr></hr>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home />}/>
        <Route exact={true} path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
