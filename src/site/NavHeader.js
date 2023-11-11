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


const NavHeader = () => {
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
                                <i className='fa fa-h-square fa-lg' /><span>Home</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                <div><span>Guide Directory</span></div>
                            </DropdownToggle>
                            <DropdownMenu dark='true' style={{backgroundColor: '#111115'}}>
                                <DropdownItem href='/guidedirectory/0'>Guitar Body</DropdownItem>
                                <DropdownItem href='/guidedirectory/1'>Guitar Neck</DropdownItem>
                                <DropdownItem href='/guidedirectory/2'>Guitar Brands</DropdownItem>
                                <DropdownItem href='/guidedirectory/3'>Guitar Bridges</DropdownItem>
                                <DropdownItem href='/guidedirectory/4'>Guitar Pickups</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='/guidedirectory'>Guide Directory</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/guideaboutpage'>
                                <i className='fa fa-gear fa-sm' /> <span>About the Guide</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-gg fa-lg' /> <span>Your Guide</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle2}>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-thumbs-up fa-lg' /> <span>Contact</span>
                            </NavLink>
                        </NavItem>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                <div className='fa fa-cogs fa-sm '><span>Site</span></div>
                            </DropdownToggle>
                            <DropdownMenu dark='true' style={{backgroundColor: '#111115'}}>
                                <DropdownItem href='/guidesitemap'>Site Map</DropdownItem>
                                <DropdownItem   href='/guidesiteref'>Site References</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </animated.div>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


export default NavHeader;