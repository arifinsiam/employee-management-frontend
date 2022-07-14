import React from "react";
import '../home.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const addEmployeeHandler = () => {
        navigate('/add-employee')
    }

    const viewListHandler = () => {
        navigate('/employees')
    }

    return(
        <>
            <div className="w3-container w3-black w3-center" style={{padding:"128px 16px"}}>
                <h1 className="w3-margin w3-jumbo">Employee Management System</h1>
                <p className="w3-xlarge">Manage, enter, and view all employee information from this site.</p>
                <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top" onClick={addEmployeeHandler}>Add an employee</button>
                <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top" onClick={viewListHandler}>View List</button>
            </div>
        </>
    )
}

export default Home;