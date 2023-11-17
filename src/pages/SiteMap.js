import { Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './SiteMap.module.css';
import profile from '../app/profile.png';

const SiteMap = () => {

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
                            <h1>SiteMap</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                            <h3 ><i>Silly Site Map</i></h3>
                        </animated.div>
                    </Col>
                    <Col>
                        <img src={profile} alt='' className='profile' />
                    </Col>
                </Row>

    );
};

export default SiteMap;