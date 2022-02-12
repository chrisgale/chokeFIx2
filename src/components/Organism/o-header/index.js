
import './style.scss';





import { ButtonToolbar, Container, Dropdown, Navbar} from 'react-bootstrap';
import {Wallet} from "../../Wallet.js"
import {Approve} from "../../approve.js"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function OHeader() {
  return (
    <Navbar className='MHeader'>
        <Container>
            <Navbar.Brand href="/">
              <img className='logoHead' src={'./assets/img/logo.png'} alt="logo"/>
              <img className='logo2' src={'./assets/img/logo2.png'} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              
          <ButtonToolbar>
            <Dropdown id="mobileMenu"> 
                <Dropdown.Toggle className="drop-btn">
              
                </Dropdown.Toggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem href="https://cronodes.xyz">HOME</DropdownItem>
                      <DropdownItem href="https://nft.cronodes.app/">NFT</DropdownItem>
                      <DropdownItem href="https://www.coingecko.com/en/coins/cronodes">CHART</DropdownItem>
                    </DropdownMenu>
            </Dropdown>
            </ButtonToolbar>


              <div className='menuItems'>
                <a href="https://cronodes.xyz" target="_blank" rel="noreferrer noopener">HOME</a>
                <a href='https://nft.cronodes.app/'>NFT</a>
                <a href="https://dexscreener.com/cronos/0x3ca50d07b1cfb4a4e61ee8d00c2ef1af6e42cee8" target="_blank" rel="noreferrer noopener">CHART</a>
              </div>



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
