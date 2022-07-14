import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
    return(
        <div>
            <Navbar className="navbar navbar-expand-md navbar-dark bg-black">
                <Container>
                    <Navbar.Brand href="/">
                        Employee Management System
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </div>
    )
}

export default Header;