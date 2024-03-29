import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";


const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'red'}}>
                <FontAwesomeIcon icon ={faVideoSlash}/>Movies App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Home</NavLink>
                    <NavLink className ="nav-link" to="/watchlist">Watch List</NavLink>
                    <NavLink className ="nav-link" to="/watched">Watched</NavLink>
                    <NavLink className ="nav-link" to="/add">Add</NavLink>      
                </Nav>
                <Button style={{"color":'red'}} variant="person">h</Button>
                <Link to="/login" >
                <Button variant="outline-info" className="me-2">Login</Button></Link>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;