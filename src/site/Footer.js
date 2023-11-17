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
        <footer className={styles.footer}>
            <Container>
                <Row className={styles.row}>
                    <Col >
                        <animated.div style={animatedStyle}>
                            <h1 >Site Links</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                            <h5 ><Link to='/'><i>Go Home</i></Link></h5>
                            <h5 ><Link to='/Contact'><i>Go to Contacts</i></Link></h5>
                            <h5><Link to='/Projects'><i>Go to Projects</i></Link></h5>
                            <h5><Link to='/History'><i>Go to History</i></Link></h5>
                        </animated.div>
                    </Col>
                    <Col>
                        <animated.div style={animatedStyle}>
                            <img src={profile} alt='profile' width="200"
                                height="auto" className='profile' />
                        </animated.div>
                    </Col>
                    <Col>
                        <animated.div style={animatedStyle}>
                            <h1 >PGA Links</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                        <ul className='list-unstyled'>
                            <li >
                                <a href="https://www.linkedin.com/in/paul-adam-86ba423b/" target="_blank" rel="noreferrer">Author LI</a>
                            </li>
                            <li>
                                <a href='https://www.youtube.com/channel/UCdSa6weDVHCPFJzjE9M4foA' target="_blank" rel="noreferrer">Author's YouTube</a>
                            </li>
                            <li>
                                <a
                                    role='button'
                                    href='mailto:paulgadam@gmail.com'
                                >
                                    <i className='' /> Author Email
                                </a>
                            </li>
                        </ul>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
};


export default Footer;