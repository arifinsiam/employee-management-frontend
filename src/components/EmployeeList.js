import React, { useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EmployeeList = ({employee, setEmployee}) => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        EmployeeService.getEmployees().then((res)=>{
            setEmployee(res.data)
        })
    }, [setEmployee])

    const addEmployeeHandler = () => {
        navigate('/add-employee')
    }

    function updateEmployee(id){
        navigate(`/update-employee/${id}`)
    }

    function deleteEmployee(id){
        console.log(id)
        console.log(employee.filter((e)=>e.id !== id))
        EmployeeService.deleteEmployee(id).then((res)=> {
        // {employee.filter((e)=>e.id !== id)}
        window.location.reload(false);
        })
    }

    function viewEmployee(id){
        navigate(`/view-employee/${id}`)
    }

    return(
        <div>
            <h2>Employee List</h2>
            <br/>
            <div>
                <Button variant="secondary" onClick={addEmployeeHandler}>Add Employee</Button>
            </div>
            <br/>
            <div className = 'row'>
                <table className = 'table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(
                                employee =>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Button variant="dark" onClick={()=> updateEmployee(employee.id)}>Update</Button>{' '}
                                        <Button variant="danger" onClick={()=> deleteEmployee(employee.id)}>Delete</Button>{' '}
                                        <Button variant="outline-dark" onClick={()=> viewEmployee(employee.id)}>View</Button>
                                    </td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList;