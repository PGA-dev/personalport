import { Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Footer.module.css';


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
            <Row>
                <Col >
                    <animated.div style={animatedStyle}>
                        <h1 m='12' id='title'>PGA is king</h1>
                    </animated.div>
                    <animated.div style={animatedStyle}>
                        <h3 ><i>Spring example for now</i></h3>
                    </animated.div>
                </Col>
            </Row>
        </footer>

    );
};


export default Footer;