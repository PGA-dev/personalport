import { useState, useEffect } from 'react';
//import {Col} from 'reactstrap';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring';


const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <Navbar id='navhead' dark color='primary' sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto' navbar>
                        <NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                <div><span>Navigation</span></div>
                            </DropdownToggle>
                            <DropdownMenu dark='true'>
                                <DropdownItem href='/contacts'>Contacts</DropdownItem>
                                <DropdownItem href='/projects'>Projects</DropdownItem>
                                <DropdownItem href='/history'>History</DropdownItem>
                                <DropdownItem href='/resume'>Resume</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='/'>Home</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


export default NavHeader;