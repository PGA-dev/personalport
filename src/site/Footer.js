import { Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
// import styles from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);
    return (
        <footer >
            <Row>
                <Col >
                    <animated.div style={animatedStyle}>
                        <h1 >Links</h1>

                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <h3 ><Link to='/'><i>Go Home</i></Link></h3>
                        <h3 ><Link to='/Contact'><i>Go to Contacts</i></Link></h3>
                    </animated.div>
                </Col>
            </Row>
        </footer>

    );
};


export default Footer;