import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';


const Test = lazy(() => import('./Test123'));



function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading... </div>}>
        <Test/>
       
      </Suspense>

      <BrowserRouter>
      <Link to="/home">home </Link>
      <Link to="/about">About </Link>
      <Link to="/services">Services </Link>
          
       
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}>
            <Route path='/services/service1' element={<Service1/>}></Route>
            <Route path='/services/service2' element={<Service2/>}></Route>
            <Route path='/services/service3' element={<Service3/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
