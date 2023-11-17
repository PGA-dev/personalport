import { Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Projects.module.css';
import profile from '../app/profile.png';

const Projects = () => {

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
                            <h1>Projects</h1>
                        </animated.div>
                        <animated.div style={animatedStyle}>
                            <h3 ><i>Silly Man</i></h3>
                        </animated.div>
                    </Col>
                    <Col>
                        <img src={profile} alt='' className='profile' />
                    </Col>
                </Row>

    );
};

export default Projects;