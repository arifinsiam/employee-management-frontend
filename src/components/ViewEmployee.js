import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {
    const { id } = useParams();
    const [ viewEmployee, setViewEmployee ] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
      });
    
    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res)=>{
            let employee = res.data
            setViewEmployee({firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId})
        })
    }, [id])

    return(
        <div>
            <br/><br/>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Employee Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Employee First Name: </label>
                        <div> { viewEmployee.firstName }</div>
                    </div>
                    <br></br>
                    <div className = "row">
                        <label> Employee Last Name: </label>
                        <div> { viewEmployee.lastName }</div>
                    </div>
                    <br></br>
                    <div className = "row">
                        <label> Employee Email ID: </label>
                        <div> { viewEmployee.emailId }</div>
                    </div>
                    <br></br>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployee;