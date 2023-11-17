import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './Contact.module.css'

const Contact = () => {

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
        config: { duration: 1500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);
//must re-write css in module that doesn't use bs or reactstrap inline
    return (

        <Row className={styles.row}>

            <Col>
            
            </Col>
            <Col >
            
                <animated.div style={animatedStyle}>
                    <h1 m='12' id='title' className='headstyle' >Contact for now</h1>
                </animated.div>
                <animated.div style={animatedStyle}>
                    <h3 className='text-center'><i>Full Stack Dev</i></h3>
                </animated.div>
            </Col>
            <Col>
            <div>
            <img src={profile} alt='profile' className='profile'  />
            </div>
            </Col>
        </Row>

    );
};


export default Contact;