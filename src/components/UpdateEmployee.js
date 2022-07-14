import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    //console.log(id)

    const [ currEmployee, setCurrEmployee ] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
      });
    const changeFirstNameHandler = (e) => {
        setCurrEmployee({...currEmployee, firstName: e.target.value})
    }

    const changeLastNameHandler = (e) => {
        setCurrEmployee({...currEmployee, lastName: e.target.value})
    }

    const changeEmailIdHandler = (e) => {
        setCurrEmployee({...currEmployee, emailId: e.target.value})
    }

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>{
            let employee = res.data;
            setCurrEmployee({firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId})
        })
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(currEmployee))

        EmployeeService.updateEmployee(id, currEmployee).then((res)=> {
            navigate('/employees')
        })
    }
    
    const cancel = () => {
        navigate('/employees')
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-e offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name" 
                                        value={currEmployee.firstName}
                                        onChange={changeFirstNameHandler}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name" 
                                        value={currEmployee.lastName}
                                        onChange={changeLastNameHandler}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com" 
                                        value={currEmployee.emailId}
                                        onChange={changeEmailIdHandler}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={updateEmployee}>Update</Button>{' '}
                                <Button variant="danger" onClick={cancel}>Cancel</Button>{' '}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee;