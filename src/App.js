import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Home from './components/Home';
import Employee from './components/EmployeeList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {

  const [ employee, setEmployee ] = useState([]);
  const [ addEmployee, setAddEmployee ] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Employee Management System</title>
        <link rel="canonical" href="https://siam-ems.herokuapp.com" />
        <meta name="description" content="Employee Management System Application" />
      </Helmet>
      <BrowserRouter>
        <Header/>
          <div className='container'>
            <Routes>
              <Route path='/' exact element={
                <Home/>
              }/>
              <Route path='/employees' element={
                <Employee
                  employee={employee}
                  setEmployee={setEmployee}
                />
              }/>
              <Route path='/add-employee' element={
                <AddEmployee
                  addEmployee = {addEmployee}
                  setAddEmployee = {setAddEmployee}
                />} />
              <Route path='/update-employee/:id' element={
                <UpdateEmployee/>} />
              <Route path='/view-employee/:id' element={
                <ViewEmployee/>} />
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;