import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../images/logo.svg';

const Navigation = () => {
    return(
        <Navbar bg="light" expand="lg">
            <div>
                <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /><span style={{fontWeight:600}}>Non-Profit</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="nonprofit-navbar-nav" />
                <Navbar.Collapse id="nonprofit-navbar-nav">
                    <Nav>
                        {/* If Nav options needed, will go here */}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}


export default Navigation;