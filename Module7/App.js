import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpData from './EmpData';
import AddEmpData from './AddEmpData';
import ViewEmpData from './ViewEmpData';
import EditEmpData from './EditEmpData';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmpData/>}></Route>
      <Route path='/addEmp' element={<AddEmpData/>}></Route>
      <Route path='/viewEmp/:viewId' element={<ViewEmpData/>}></Route>
      <Route path='/editEmp/:editId' element={<EditEmpData/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
