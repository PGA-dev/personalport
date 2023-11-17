import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Header.module.css'

const Header = () => {

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
<div className={styles.div}>
        <Row className={styles.row}>
            <Col >
                <h1 m='12' id='title' className='headstyle' >PGA</h1>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>Full Stack Developer</i></h3>
                </animated.div>
            </Col>
        </Row>
</div>
    );
};


export default Header;