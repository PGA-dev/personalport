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
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggle, setToggle] = useState(false);


    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    const animatedStyle2 = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);


    return (
        <Navbar id='navhead' dark color='primary' sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='me-auto' navbar>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/' >
                                <i/><span>Home</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
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
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i /> <span>Home</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <NavItem>
                            <NavLink className='nav-link' to='/history'>
                                <i /> <span>History</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i /> <span>Contact</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                <div><span>Site</span></div>
                            </DropdownToggle>
                            <DropdownMenu dark="true">
                                <DropdownItem href='/sitemap'>Site Map</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </animated.div>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


export default Header;