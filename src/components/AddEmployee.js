import React from "react";
import {useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EmployeeService from "../services/EmployeeService";

const AddEmployee = ({addEmployee, setAddEmployee}) => {

    const navigate = useNavigate();

    const inputFirstNameHandler = (e) => {
        setAddEmployee({...addEmployee, firstName: e.target.value})
    }

    const inputLastNameHandler = (e) => {
        setAddEmployee({...addEmployee, lastName: e.target.value})
    }

    const inputEmailIdHandler = (e) => {
        setAddEmployee({...addEmployee, emailId: e.target.value})
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(addEmployee))

        EmployeeService.createEmployee(addEmployee).then((res)=> {
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
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First name" 
                                        value={addEmployee.firstName}
                                        onChange={inputFirstNameHandler}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name" 
                                        value={addEmployee.lastName}
                                        onChange={inputLastNameHandler}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com" 
                                        value={addEmployee.emailId}
                                        onChange={inputEmailIdHandler}
                                    />
                                </Form.Group>
                                <Button variant="success" onClick={saveEmployee}>Save</Button>{' '}
                                <Button variant="danger" onClick={cancel}>Cancel</Button>{' '}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;