import { Row, Col, Container } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import profile from '../app/profile.png';

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
        <footer className='site-footer'>
            <Container>
                <Row className={styles.row}>
                    <Col >
                        <animated.div style={animatedStyle}>
                            <h1 >Links</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                            <h5 ><Link to='/'><i>Go Home</i></Link></h5>
                            <h5 ><Link to='/Contact'><i>Go to Contacts</i></Link></h5>
                        </animated.div>
                    </Col>
                    <Col>
                        <animated.div style={animatedStyle}>
                        <img src={profile} alt='profile' className='profile' />
                        </animated.div>
                    </Col>
                    <Col>
                        <animated.div style={animatedStyle}>
                            <h1 >Links</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                        <h5 ><Link to='/'><i>Go Home</i></Link></h5>
                            <h5 ><Link to='/Contact'><i>Go to Contacts</i></Link></h5>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
};


export default Footer;