import './style.scss';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { BsFillPersonFill } from "react-icons/bs";
import {Wallet} from "../../Wallet.js"
import {Approve} from "../../approve.js"

function OHeader() {
  return (
    <Navbar className='MHeader'>
        <Container>
            <Navbar.Brand href="/">
              <img className='logo' src={'./assets/img/logo.png'} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <div className="user-metamask">
                    <Approve/>
                </div>

            <Navbar.Text className='text-white direction="horizontal'>

                <div className='user-metamask'>

                    <Wallet/>
                </div>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
 
export default OHeader;
