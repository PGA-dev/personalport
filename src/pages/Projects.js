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

        <div className={styles.gridContainer}>
            <div className={styles.item1}>
                <animated.div style={animatedStyle}>
                    <h1  >Projects</h1>
                </animated.div></div>

                <div className={styles.item2}>
                    Project List

            </div>
            <div className={styles.item3}>
                <animated.div style={animatedStyle}>
                    <h4 ><i>Some cool text or picture</i></h4>
                    <img src={profile} alt='profile' width={200} className={styles.profile} />
                </animated.div></div>

            <div className={styles.item4}>
                <h5>Links to GitHub and Linked In</h5>
            </div>

        </div>

    );
};

export default Projects;