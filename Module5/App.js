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
