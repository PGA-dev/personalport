import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import profile from '../app/profile.png';
import styles from './Resume.module.css';

const Resume = () => {

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

        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <animated.div style={animatedStyle}>
                    <h1  >Resume and Skills Matrix</h1>
                </animated.div></div>

                <div className={styles.item2}>
                    Mission statement

            </div>
            <div className={styles.item3}>
                <animated.div style={animatedStyle}>
                    <h4 ><i>Some cool text or picture</i></h4>
                    <img src={profile} alt='profile' width={200} className={styles.profile} />
                </animated.div></div>

            <div className={styles.item4}>
                <h5>Skills table</h5>
            </div>

        </div>

    );
};

export default Resume;