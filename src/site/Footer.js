import { Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


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
        <Row className='text-center site-footer'>
            <Col >
            <animated.div style={animatedStyle}>
                <h1 m='12' id='title' className='headstyle' >PGA</h1>
                </animated.div>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>Full Stack Dev</i></h3>
                </animated.div>
            </Col>
        </Row>
        </footer>
    );
};


export default Footer;