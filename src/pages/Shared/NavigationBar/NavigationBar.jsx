import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user , logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error => console.log(error))
    }
    return (
        <div>
            <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
          { user && <Nav.Link href="#deets">
              <FaUserCircle style ={{fontSize: '2rem'}}></FaUserCircle>
            </Nav.Link>}

            <Nav.Link eventKey={2} href="#memes">
            { user?
              <Button onClick={handleLogOut} variant="secondary">Log Out</Button>:
              
              <Link to={'/login'}><Button variant="secondary">Login</Button></Link>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;