import { Col, Row, Container } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './HomePage.module.css';

const HomePage = () => {

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

                <Row className={styles.row}>
                    <Col >
                        <animated.div style={animatedStyle}>
                            <h1>PGA</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                            <h3 ><i>Full Stack Dev</i></h3>
                        </animated.div>
                    </Col>
                    <Col>
                        <img src={profile} alt='' className='profile' />
                    </Col>
                </Row>

    );
};


export default HomePage;