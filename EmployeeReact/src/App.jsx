import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<EmployeeList/>}/>
      <Route path='/form' element={<EmployeeForm/>}/>
     </Routes>
    </div>
  );
}

export default App;
